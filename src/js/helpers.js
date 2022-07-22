import { TIMEOUT_SECONDS } from './config.js';

const timeOut = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(`Request took too long! Timeout after ${seconds} second`)
      );
    }, seconds * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetchData = fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });
    const res = await Promise.race([fetchData, timeOut(TIMEOUT_SECONDS)]);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
