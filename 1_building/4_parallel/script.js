function updateClicks() {
  const clicks = {};

  function reportClicks(item) {
    clicks[item] = (clicks[item] || 0) + 1;
    console.log(item, clicks);
  }

  return reportClicks;
}

const reportActivities = updateClicks();
const reportProducts = updateClicks();
