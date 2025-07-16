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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Workout Analytics</h2>
      <div className="bg-white rounded shadow p-4 mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="calories" fill="#38bdf8" name="Calories Burned" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 rounded p-4 text-center">
          <div className="text-3xl font-bold">
            {workouts.reduce((a, w) => a + w.reps, 0)}
          </div>
          <div>Total Reps</div>
        </div>
        <div className="bg-green-100 rounded p-4 text-center">
          <div className="text-3xl font-bold">
            {workouts.reduce((a, w) => a + w.calories, 0).toFixed(1)}
          </div>
          <div>Total Calories</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
