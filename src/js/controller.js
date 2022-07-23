import "../styles/main.css";
import favicon from "../img/favicon.png";

import * as model from "./model.js";
import jokeView from "./views/jokeView.js";

const controlNewJoke = async function () {
  await model.getRandomJoke();
  jokeView.render(model.state.joke);
};

const init = async function () {
  jokeView.addHandlerUpdateJoke(controlNewJoke);
  await model.getRandomJoke();
  jokeView.render(model.state.joke);
};
init();
