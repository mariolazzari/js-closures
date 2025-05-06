const updateClicks = (function () {
  const choices = [];

  return {
    addChoice: function (newChoice) {
      choices.push(newChoice);
    },
    getChoices: function () {
      return choices;
    },
  };
})();
