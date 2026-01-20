const source = document.getElementById("source");
const target = document.getElementById("target");
const sourceCount = document.getElementById("source-count");
const targetCount = document.getElementById("target-count");
const swap = document.getElementById("swap");
const translate = document.getElementById("translate");
const sourceLanguage = document.getElementById("source-language");
const targetLanguage = document.getElementById("target-language");

const updateCounts = () => {
  sourceCount.textContent = `${source.value.length} / 500`;
  targetCount.textContent = `${target.value.length} / 500`;
};

const mockTranslate = () => {
  if (!source.value.trim()) {
    target.value = "";
    updateCounts();
    return;
  }

  const input = source.value.trim();
  target.value = `${input} (${targetLanguage.options[targetLanguage.selectedIndex].text})`;
  updateCounts();
};

source.addEventListener("input", updateCounts);
translate.addEventListener("click", mockTranslate);

swap.addEventListener("click", () => {
  const currentSource = sourceLanguage.value;
  sourceLanguage.value = targetLanguage.value;
  targetLanguage.value = currentSource;

  const currentText = source.value;
  source.value = target.value;
  target.value = currentText;
  updateCounts();
});

updateCounts();
