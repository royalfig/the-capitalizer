import { prep, coordConj, subConj, articles, allCaps } from "./lists";
// import { debounce } from "../../node_modules/debounce";
import { throttle, debounce } from "../../node_modules/throttle-debounce";

function lowercaseFirstLetter(word, style) {
  const capped = cap(word);
  if (allCaps.includes(word.toUpperCase().replace(/\./g, ""))) {
    return word.toUpperCase();
  } else {
    switch (style) {
      case "AP": {
        if (
          [...prep, ...articles, ...coordConj, ...subConj].includes(word) &&
          word.length < 4
        ) {
          return word;
        } else {
          return capped;
        }
      }
      case "APA": {
        if (
          [...articles, ...prep, ...coordConj, ...subConj].includes(word) &&
          word.length < 4
        ) {
          return word;
        } else {
          return capped;
        }
      }
      case "CMS": {
        const chi = ["and", "as", "but", "for", "or", "nor"];
        if ([...chi, ...articles, ...prep].includes(word)) {
          return word;
        } else {
          return capped;
        }
      }
      case "MLA": {
        if ([...articles, ...prep, ...coordConj].includes(word)) {
          return word;
        } else {
          return capped;
        }
      }
      case "NYT": {
        const nyLowerCase = [
          "and",
          "as",
          "at",
          "but",
          "by",
          "en",
          "for",
          "if",
          "in",
          "of",
          "on",
          "or",
          "to",
          "v.",
          "vs.",
          "via"
        ];
        const nyUpperCase = ["no", "nor", "not", "off", "out", "so", "up"];
        if (
          [...nyLowerCase, ...articles].includes(word) &&
          !nyUpperCase.includes(word)
        ) {
          return word;
        } else {
          return capped;
        }
      }
      case "WP": {
        if (
          [...articles, ...coordConj, ...prep].includes(word) &&
          word.length < 5
        ) {
          return word;
        } else {
          return capped;
        }
      }
    }
  }
}

function cap(word) {
  return word.replace(/\w/, match => match.toUpperCase());
}

function capitalize(titles, style) {
  const titleArr = [];

  if (titles.length > 0) {
    titles.forEach(word => titleArr.push(lowercaseFirstLetter(word, style)));
  }

  // Cap the last word
  const lastWord = cap(titleArr.splice(-1).toString());
  titleArr[titleArr.length] = lastWord;

  const joinedTitleArr = titleArr.join(" ");

  // Cap the first word
  const finalTitleArrFixed = joinedTitleArr.replace(/\w|\w$/, match =>
    cap(match)
  );

  const hyphenFixed = finalTitleArrFixed.replace(/-(\w)|:\s(\w)/g, p1 =>
    cap(p1)
  );

  return hyphenFixed;
}

class Title {
  constructor(title, style) {
    this.original = title.trim();
    this.lowercase = this.original.toLowerCase();
    this.wordArray = this.lowercase.split(" ");
    this.capitalized = capitalize(this.wordArray, style);
  }
}

export default function capitalizer(style, text) {
  // Split titles into individuals
  const titles = text.split(/\n/);
  const titlesArray = [];

  titles.forEach(item => {
    let titleObj = new Title(item, style);
    titlesArray.push(titleObj);
  });

  return titlesArray;
}
