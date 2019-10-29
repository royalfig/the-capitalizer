import { prep, coordConj, articles, spec } from "./lists";
import { debounce } from "../../node_modules/debounce";
import posTagger from "../../node_modules/wink-pos-tagger";

const tagger = posTagger();

export default debounce(capitalizer, 100);

function capitalizer(style, text) {
  // Split titles into individuals
  const originalTitles = text
    .trim()
    .toLowerCase()
    .split(/\n/);

  const pos = tagger.tagSentence(text);
  console.log(pos);

  const titleArray = [];

  originalTitles.forEach(element => {
    titleArray.push(
      element.replace(/\s\w|^\w/g, letter => {
        return letter.toUpperCase();
      })
    );
  });

  const wordArray = [];

  titleArray.forEach(element => {
    wordArray.push(element.split(" "));
  });

  if (style === "AP" || style === "APA" || style === "NYT") {
    // Lowercase prepositions and articles

    for (let title in wordArray) {
      for (let word in wordArray[title]) {
        if (
          wordArray[title][word].length < 4 &&
          [...prep, ...articles].includes(wordArray[title][word].toLowerCase())
        ) {
          wordArray[title][word] = wordArray[title][word].toLowerCase();
        }
      }
    }
  } else {
    // Lowercase prepositions and articles
    for (let title in wordArray) {
      for (let word in wordArray[title]) {
        if (
          [...prep, ...articles].includes(wordArray[title][word].toLowerCase())
        ) {
          wordArray[title][word] = wordArray[title][word].toLowerCase();
        }
      }
    }
  }

  const finalTitle = [];
  for (let word in wordArray) {
    finalTitle.push(
      wordArray[word]
        .join(" ")
        .replace(/\w/, firstLetter => firstLetter.toUpperCase())
    );
  }

  return finalTitle;
}
