/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generateDomains(pronouns, adjectives, nouns, extensions) {
    const generatedDomains = [];

    for (let pronoun of pronouns) {
      for (let adjective of adjectives) {
        for (let noun of nouns) {
          for (let extension of extensions) {
            let domain = pronoun + adjective + noun + extension;
            generatedDomains.push(domain);

            if (extension === ".es") {
              let hackDomain = pronoun + adjective + noun + "s" + extension;
              generatedDomains.push(hackDomain);
            }
          }
        }
      }
    }

    return generatedDomains;
  }

  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io", ".es"];

  let generatedDomains = generateDomains(
    pronouns,
    adjectives,
    nouns,
    extensions
  );
  let generatorDiv = document.getElementById("generator");
  generatorDiv.innerHTML = generatedDomains.join("<br>");
  console.log(generatedDomains);
};
