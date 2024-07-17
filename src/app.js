/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["the dog", "my grandma", "the mailman", "my bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = ["I do at afternooom", "when i have son", "at night"];
  [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was prayibng"
  ];

  function generateExcuse() {
    const generateRandomArray = () => {
      return;
    };

    let randomwho = Math.floor(Math.random() * who.length);
    let randomaction = Math.floor(Math.random() * action.length);
    let randomwhat = Math.floor(Math.random() * what.length);
    let randomwhen = Math.floor(Math.random() * when.length);
    let excuse =
      who[randomwho] +
      " " +
      action[randomaction] +
      " " +
      what[randomwhat] +
      " " +
      when[randomwhen];
    return excuse;
  }

  document.getElementById("excuse").innerHTML = generateExcuse();
};
