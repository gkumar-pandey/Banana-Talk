const inputText = document.querySelector("#text-area");
const translateBtn = document.querySelector(".trans-btn");
const outputArea = document.querySelector(".output-area");

const renderingTranslatedText = (text) => {
   outputArea.innerText = text;
};
const fetchData = async (servelUrl) => {
  try {
    const res = await fetch(servelUrl);
    const data = await res.json();
    let trnaslatedText = data.contents.translated;
    renderingTranslatedText(trnaslatedText);
    return;
  } catch (error) {
    alert('Somthing went wrong, try again some time.')
  }
};

const translateHandle = () => {
  const servelUrl = `https://api.funtranslations.com/translate/minion.json?text=${inputText.value}`;
  fetchData(servelUrl);
};

translateBtn.addEventListener("click", translateHandle);
