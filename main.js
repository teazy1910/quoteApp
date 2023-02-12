const submit = document.querySelector("#submit");
const showQuote = document.querySelector(".quote");

submit.addEventListener("click", fetchApi);

function fetchApi() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((data) => {
      const quote = data.quote;
      const author = data.author;

      document.querySelector(".author").innerText = quote;
      document.querySelector(".quote").innerText = author;
    });
}
