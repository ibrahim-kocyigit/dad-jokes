import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  joke: '',
};

export const getRandomJoke = async function () {
  const jokeJSON = await getJSON(API_URL);
  state.joke = jokeJSON.joke;
};
