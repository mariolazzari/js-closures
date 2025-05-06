const choices = {
  color: "",
  model: "",
};
function updateColor(newColor) {
  choices.color = newColor;
}
function updateModel(newModel) {
  choices.model = newModel;
}
function getSelection() {
  return choices;
}

const selection = (function () {
  return {
    getSelection,
    updateColor,
    updateModel,
  };
})();
