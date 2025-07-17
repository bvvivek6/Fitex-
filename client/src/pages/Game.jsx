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
      // Try postMessage (for custom integration)
      iframe.contentWindow.postMessage({ type: "JUMP" }, "*");

      try {
        const event = new KeyboardEvent("keydown", {
          key: " ",
          keyCode: 32,
          which: 32,
          code: "Space",
          bubbles: true,
        });
        iframe.contentWindow.document.dispatchEvent(event);
      } catch (e) {
        console.error("Failed to send jump event to iframe:", e);
      }
    }
  };

  const handleSave = async () => {
    if (!token) return setMessage("Login required");
    const res = await logWorkout(token, "jump", reps, calories);
    if (res._id) setMessage("Workout saved!");
    else setMessage(res.error || "Error saving workout");
  };

  const [shoulder, setShoulder] = useState(null);

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
    <div className="relative min-h-screen flex font-grotesk flex-col bg-black items-center justify-start p-0">
      <div className="w-full flex flex-col items-center pt-8">
        <h2 className="text-3xl font-medium text-orange-400 mb-4 text-center">
          Jump to Play Dino!
        </h2>
        <div className="rounded-xl flex flex-col items-center justify-center p-4">
          <iframe
            id="dino-iframe"
            src="/dino/index.html"
            width="700"
            height="220"
            title="Dino Game"
            className="rounded-2xl border border-[#2a2a2a] p-4 "
          ></iframe>
        </div>
      </div>

      <div className="flex flex-row  gap-4 z-50">
        <div className="relative aspect-video w-[400px] bg-white rounded-lg shadow-lg overflow-hidden flex items-center ">
          <PoseTracker
            onJump={handleJump}
            onPose={handlePose}
            highlightShoulder
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="flex flex-col gap-2 border border-[#2a2a2a] bg-black rounded-lg p-2 h-full min-w-[180px]">
          <div className="flex flex-col gap-1">
            <div className="text-blue-600 font-bold">Reps: {reps}</div>
            <div className="text-green-600 font-bold">
              Calories: {calories.toFixed(2)}
            </div>

            {message && (
              <div className="text-xs text-center text-gray-500 mt-1">
                {message}
              </div>
            )}
          </div>

          <div className="mt-2 text-xs text-gray-500">
            <div className="font-medium text-gray-400 mb-1">Shoulders</div>
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
          <button
            onClick={handleSave}
            className=" mt-6 bg-orange-500 text-white px-2 py-1  rounded hover:bg-orange-600 transition"
          >
            Save Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
