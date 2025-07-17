import React, { useEffect, useState } from "react";
import { getMyWorkouts } from "../utils/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = ({ token }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    if (token) {
      getMyWorkouts(token).then(setWorkouts);
    }
  }, [token]);

  const chartData = workouts.map((w) => ({
    date: new Date(w.date).toLocaleDateString(),
    calories: w.calories,
    reps: w.reps,
    type: w.type,
  }));

  return (
    <div className="min-h-screen bg-black font-grotesk tracking-tight p-6">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-orange-500/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Workout <span className="text-orange-500">Analytics</span>
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Track your fitness progress over time
          </p>
        </div>

        <div className="bg-white/[0.02] border border-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
            Calories Burned Over Time
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis
                dataKey="date"
                stroke="#9CA3AF"
                fontSize={12}
                fontFamily="inherit"
              />
              <YAxis stroke="#9CA3AF" fontSize={12} fontFamily="inherit" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  color: "white",
                  fontFamily: "inherit",
                }}
              />
              <Bar
                dataKey="calories"
                fill="#f97316"
                name="Calories Burned"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/[0.02] border border-white/10 backdrop-blur-sm rounded-3xl p-8 text-center group hover:scale-[1.02] transition-transform duration-300">
            <div className="text-5xl font-black text-orange-500 mb-3 tracking-tight group-hover:scale-110 transition-transform duration-300">
              {workouts.reduce((a, w) => a + w.reps, 0)}
            </div>
            <div className="text-gray-400 text-lg font-medium">Total Reps</div>
          </div>
          <div className="bg-white/[0.02] border border-white/10 backdrop-blur-sm rounded-3xl p-8 text-center group hover:scale-[1.02] transition-transform duration-300">
            <div className="text-5xl font-black text-orange-500 mb-3 tracking-tight group-hover:scale-110 transition-transform duration-300">
              {workouts.reduce((a, w) => a + w.calories, 0).toFixed(1)}
            </div>
            <div className="text-gray-400 text-lg font-medium">
              Total Calories
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
