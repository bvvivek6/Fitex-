const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export async function login(username, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function signup(username, password) {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function logWorkout(token, type, reps, calories) {
  const res = await fetch(`${API_URL}/workout/log`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ type, reps, calories }),
  });
  return res.json();
}

export async function getMyWorkouts(token) {
  const res = await fetch(`${API_URL}/workout/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
