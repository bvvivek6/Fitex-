import React, { useRef, useEffect } from "react";
import * as mpPose from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";

let lastShoulderY = null;
let jumpActive = false;

const PoseTracker = ({ onJump, onSquat, onPose, highlightShoulder }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const pose = new mpPose.Pose({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });
    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    pose.onResults(onResults);

    let camera;
    if (videoRef.current) {
      camera = new cam.Camera(videoRef.current, {
        onFrame: async () => {
          await pose.send({ image: videoRef.current });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }

    function onResults(results) {
      const canvasCtx = canvasRef.current.getContext("2d");
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, 640, 480);
      canvasCtx.drawImage(results.image, 0, 0, 640, 480);
      if (results.poseLandmarks) {
        detectMovements(results.poseLandmarks);
        if (typeof onPose === "function") {
          onPose(results.poseLandmarks);
        }
        if (highlightShoulder) {
          const left = results.poseLandmarks[11];
          const right = results.poseLandmarks[12];
          if (left) {
            canvasCtx.beginPath();
            canvasCtx.arc(left.x * 640, left.y * 480, 10, 0, 2 * Math.PI);
            canvasCtx.fillStyle = "#38bdf8";
            canvasCtx.fill();
          }
          if (right) {
            canvasCtx.beginPath();
            canvasCtx.arc(right.x * 640, right.y * 480, 10, 0, 2 * Math.PI);
            canvasCtx.fillStyle = "#22d3ee";
            canvasCtx.fill();
          }
        }
      }
      canvasCtx.restore();
    }

    return () => {
      if (camera) camera.stop();
    };
  }, []);

  function detectMovements(landmarks) {
    // Use shoulders
    const leftShoulder = landmarks[mpPose.POSE_LANDMARKS.LEFT_SHOULDER].y;
    const rightShoulder = landmarks[mpPose.POSE_LANDMARKS.RIGHT_SHOULDER].y;
    const avgShoulderY = (leftShoulder + rightShoulder) / 2;
    //jump threshold
    const jumpThreshold = 0.04;
    if (lastShoulderY !== null) {
      // trigger when jumped over threshold
      if (!jumpActive && lastShoulderY - avgShoulderY > jumpThreshold) {
        jumpActive = true;
        if (typeof onJump === "function") onJump();
      }
      // Reset jump state if shoulders drop back down
      if (jumpActive && avgShoulderY > lastShoulderY - jumpThreshold / 2) {
        jumpActive = false;
      }
    }
    lastShoulderY = avgShoulderY;
  }

  return (
    <div className="relative w-full h-full">
      <video ref={videoRef} className="hidden" />
      <canvas
        ref={canvasRef}
        width={640}
        height={480}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default PoseTracker;
