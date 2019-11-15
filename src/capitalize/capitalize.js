import {
  prep,
  coordConj,
  subConj,
  articles,
  allCaps,
  lowercasePartOfNames,
  species,
  verbalPhrases
} from "./lists";

function convertToEmDash(input) {
  return input.replace(/--|(?!\d)\u2013(?!\d)/g, "\u2014");
}

function lowercaseFirstLetter(word, style, pos, length) {
  console.log(word, style, pos + 1, length);
  const capped = cap(word);
  if (allCaps.includes(word.toUpperCase().replace(/[.,—?:-]/g, ""))) {
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
            ...lowercasePartOfNames,
            ...species
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
            ...lowercasePartOfNames,
            ...species
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
          [
            ...chi,
            ...articles,
            ...prep,
            ...lowercasePartOfNames,
            ...species
          ].includes(word)
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
            ...lowercasePartOfNames,
            ...species
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
          [
            ...nyLowerCase,
            ...articles,
            ...lowercasePartOfNames,
            ...species
          ].includes(word) &&
          !nyUpperCase.includes(word)
        ) {
          return word;
        } else {
          return capped;
        }
      }
      case "WP": {
        if (
          [...articles, ...coordConj, ...prep, ...species].includes(word) &&
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
  const titleLength = titles.length;

  if (titleLength > 0) {
    titles.forEach((word, idx) => {
      titleArr.push(lowercaseFirstLetter(word, style, idx, titleLength));
    });
    // titles.forEach(word => titleArr.push(lowercaseFirstLetter(word, style)));
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

  const leftQuote = punctuationFixed.replace(/^(")/, "\u201C");

  const rightQuote = leftQuote.replace(/(")$/, "\u201D");

  const emDash = rightQuote.replace(
    /—(\w+)/g,
    (match, sub) => "—" + lowercaseFirstLetter(sub, style)
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
  const config = getConfig(style);
  const titles = text.split(/\n/);
  const titlesArray = [];

  titles.forEach(item => {
    let titleObj = new Title(item, style);
    titlesArray.push(titleObj);
  });

  return titlesArray;
}

const getConfig = style => {
  switch (style) {
    case "AP":
      return AP;
    case "APA":
      return APA;
    case "CMS":
      return CMS;
    case "MLA":
      return MLA;
    case "NYT":
      return NYT;
    case "WP":
      return WP;
  }
};

const AP = { alwaysLower: [], greeting: "Hi Rye" };
const APA = { alwaysLower: [], greeting: "Hi Rye" };
const CMS = { alwaysLower: [], greeting: "Hi Rye" };
const MLA = { alwaysLower: [], greeting: "Hi Rye" };
const NYT = { alwaysLower: [], greeting: "Hi Rye" };
const WP = { alwaysLower: [], greeting: "Hi Rye" };

// Functions run beforehand -- convert to em dash, smartquotes, trim
// Functions run to individual words - match whether word is on list, add word position here
// Functions run to whole sentences - match whether punctuation, phrase, etc. is on list
