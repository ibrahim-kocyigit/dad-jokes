class JokeView {
  _joke;
  _parentElement = document.querySelector(".container__joke");

  render(data) {
    this._joke = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerUpdateJoke(handler) {
    document.querySelector(".btn-new-joke").addEventListener("click", handler);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup() {
    return `
        <div>
            <p class="joke">${this._joke}</p>
        </div>
    `;
  }
}

export default new JokeView();
