import {
  prep,
  coordConj,
  subConj,
  articles,
  allCaps,
  lowercasePartOfNames
} from "./lists";
// import { debounce } from "../../node_modules/debounce";
import { throttle, debounce } from "../../node_modules/throttle-debounce";

function convertToEmDash(input) {
  return input.replace(/--|(?!\d)\u2013(?!\d)/g, "\u2014");
}

function lowercaseFirstLetter(word, style) {
  const capped = cap(word);
  if (allCaps.includes(word.toUpperCase().replace(/[\.,—?:-]/g, ""))) {
    return word.toUpperCase();
  } else {
    switch (style) {
      case "AP": {
        if (
          [
            ...prep,
            ...articles,
            ...coordConj,
            ...subConj,
            ...lowercasePartOfNames
          ].includes(word) &&
          word.length < 4
        ) {
          return word;
        } else {
          return capped;
        }
      }
      case "APA": {
        if (
          [
            ...articles,
            ...prep,
            ...coordConj,
            ...subConj,
            ...lowercasePartOfNames
          ].includes(word) &&
          word.length < 4
        ) {
          return word;
        } else {
          return capped;
        }
      }
      case "CMS": {
        const chi = ["and", "as", "but", "for", "or", "nor"];
        if (
          [...chi, ...articles, ...prep, ...lowercasePartOfNames].includes(word)
        ) {
          return word;
        } else {
          return capped;
        }
      }
      case "MLA": {
        if (
          [
            ...articles,
            ...prep,
            ...coordConj,
            ...lowercasePartOfNames
          ].includes(word)
        ) {
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
          [...nyLowerCase, ...articles, ...lowercasePartOfNames].includes(
            word
          ) &&
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

  const punctuationFixed = finalTitleArrFixed.replace(
    /-(\w)|:\s(\w)|\?\s(\w)|\.\s(\w)/g,
    match => cap(match)
  );

  const leftQuote = punctuationFixed.replace(/^(\")/, "\u201C");

  const rightQuote = leftQuote.replace(/(")$/, "\u201D");

  const emDash = rightQuote.replace(/(?<=—)\w+/g, match =>
    lowercaseFirstLetter(match, style)
  );

  return emDash;
}

class Title {
  constructor(title, style) {
    this.original = convertToEmDash(title.trim());
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
