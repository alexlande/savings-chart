export default ({
  years,
  initialSavings,
  annualSavings,
  interest
}) => {
  const result = [];
  let currentSavings = initialSavings;

  // Chart one year longer than the user entered to allow
  // for visual overflow on the chart.
  for (let year = 0; year <= years + 1; year++) {
    result.push({
      x: new Date(2017 + year, 1),
      y: Math.round(currentSavings)
    });

    currentSavings = (currentSavings + annualSavings) * (1 + interest);
  };

  return result;
};
