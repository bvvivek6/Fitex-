import React, { useState, useRef } from "react";
import PoseTracker from "../components/PoseTracker";
import { estimateCalories } from "../utils/calorieEstimator";
import { logWorkout } from "../utils/api";

const Game = ({ token }) => {
  const [reps, setReps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [message, setMessage] = useState("");

  const handleJump = () => {
    setReps((r) => r + 1);
    const cals = estimateCalories("jump", reps + 1);
    setCalories(cals);
    setMessage("Jump detected!");

    const iframe = document.getElementById("dino-iframe");
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.focus();
      // Use postMessage to communicate with the iframe
      iframe.contentWindow.postMessage({ type: "JUMP" }, "*");
    }
  };

  const handleSave = async () => {
    if (!token) return setMessage("Login required");
    const res = await logWorkout(token, "jump", reps, calories);
    if (res._id) setMessage("Workout saved!");
    else setMessage(res.error || "Error saving workout");
  };

  const [shoulder, setShoulder] = useState(null);

  // Custom handler to get pose landmarks from PoseTracker
  const handlePose = (landmarks) => {
    if (landmarks && landmarks.length > 0) {
      // 11: left shoulder, 12: right shoulder in MediaPipe
      setShoulder({
        left: landmarks[11],
        right: landmarks[12],
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col items-center justify-start p-0">
      <div className="w-full flex flex-col items-center pt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Jump to Play Dino!
        </h2>
        <div className="rounded-xl shadow-lg bg-white flex flex-col items-center justify-center p-4">
          <iframe
            id="dino-iframe"
            src="/dino/index.html"
            width="700"
            height="220"
            title="Dino Game"
            className="rounded border border-gray-200 shadow"
            style={{ background: "#f7f7f7" }}
          ></iframe>
        </div>
      </div>

      <div className="flex flex-row items-end gap-4 z-50">
        <div className="relative aspect-video w-[400px] bg-black rounded-lg shadow-lg overflow-hidden flex items-center ">
          <PoseTracker
            onJump={handleJump}
            onPose={handlePose}
            highlightShoulder
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="flex flex-col gap-2 mt-4  bg-white rounded-lg shadow-lg p-4 min-w-[180px]">
          <div className="text-lg font-semibold text-gray-700">Stats</div>
          <div className="flex flex-col gap-1">
            <div className="text-blue-600 font-bold">Reps: {reps}</div>
            <div className="text-green-600 font-bold">
              Calories: {calories.toFixed(2)}
            </div>
            <button
              onClick={handleSave}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            >
              Save Workout
            </button>
            {message && (
              <div className="text-xs text-center text-gray-500 mt-1">
                {message}
              </div>
            )}
          </div>

          <div className="mt-2 text-xs text-gray-500">
            <div className="font-bold text-gray-700 mb-1">Shoulders</div>
            {shoulder ? (
              <>
                <div>
                  Left: x={shoulder.left.x.toFixed(2)}, y=
                  {shoulder.left.y.toFixed(2)}
                </div>
                <div>
                  Right: x={shoulder.right.x.toFixed(2)}, y=
                  {shoulder.right.y.toFixed(2)}
                </div>
              </>
            ) : (
              <div>No pose detected yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
