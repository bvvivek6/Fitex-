// Frontend calorie estimation utility
export function estimateCalories(type, reps, weight = 70) {
  const METS = { jump: 8, squat: 5 };
  const duration = reps * 2; // 2 seconds per rep
  const hours = duration / 3600;
  const met = METS[type] || 5;
  return +(met * weight * hours).toFixed(2);
}
