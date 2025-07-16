// Simple calorie estimation based on METs
// MET values: jump = 8, squat = 5 (approximate)
// duration in seconds, weight in kg
function estimateCalories(type, reps, weight = 70) {
  const METS = { jump: 8, squat: 5 };
  const duration = reps * 2; // 2 seconds per rep
  const hours = duration / 3600;
  const met = METS[type] || 5;
  return +(met * weight * hours).toFixed(2);
}

module.exports = { estimateCalories };
