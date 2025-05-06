// outer function
function updateClicks() {
  const button = this.id;
  clicks[button] = clicks[button] + 1 || 1;

  // inner function
  function reportClicks() {
    const report = [button, clicks];
    console.log(report);
  }

  reportClicks();
}
