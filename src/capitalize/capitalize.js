import {
  prep,
  coordConj,
  subConj,
  articles,
  allCaps,
  lowercasePartOfNames,
  species,
  verbalPhrases,
  chi,
  nyLowerCase,
  nyUpperCase
} from "./lists";

// Functions to convert before splitting titles into arrays
const prepareTitle = input =>
  input
    .replace(/'\b/g, "\u2018")
    .replace(/\b'/g, "\u2019")
    .replace(/"\b/g, "\u201c")
    .replace(/\b"/g, "\u201d")
    .replace(/--/g, "\u2014")
    .replace(/\b\u2018\b/g, "\u2019")
    .replace(/(\u2018)(\d\ds)/g, "\u2019$2");

const doCapitalization = (word, pos, config, length) => {
  const baseWord = word.replace(/[.,;'"?:\u2018\u2019\u201c\u201d]/g, "");
  const baseWordCap = baseWord.toUpperCase();
  const lengthRule =
    config.alwaysLowerLength === null
      ? true
      : baseWord.length < config.alwaysLowerLength;

  if (
    config.alwaysLower.includes(baseWord) &&
    lengthRule &&
    !config.allCaps.includes(baseWordCap) &&
    !config.alwaysUpper.includes(baseWord) &&
    pos !== 0 &&
    pos + 1 !== length
  ) {
    return word;
  } else if (config.allCaps.includes(baseWordCap)) {
    return baseWordCap;
  } else {
    return cap(word);
  }
};

function cap(word) {
  return word.replace(/\w/, match => match.toUpperCase());
}

function capitalize(wordArray, config) {
  const titleArr = [];
  const titleLength = wordArray.length;

  if (titleLength > 0) {
    wordArray.forEach((word, idx) => {
      titleArr.push(doCapitalization(word, idx, config, titleLength));
    });
  }
  // Post function
  const joinedTitleArr = titleArr.join(" ");

  const verbalNounsCapped = joinedTitleArr.replace(verbalPhrases, match =>
    match.replace(/\b\w/g, match => match.toUpperCase())
  );

  const punctuationFixed = verbalNounsCapped.replace(
    /-(\w)|:\s(\w)|\?\s(\w)|\.\s(\w)/g,
    match => cap(match)
  );

  const emDashFixed = punctuationFixed.replace(
    /\u2014(\w+)/g,
    (match, capture) => "\u2014" + doCapitalization(capture, 1, config, 3)
  );

  return emDashFixed;
}

class Title {
  constructor(title, config) {
    this.prepared = prepareTitle(title.trim());
    this.lowercase = this.prepared.toLowerCase();
    this.wordArray = this.lowercase.split(" ");
    this.capitalized = capitalize(this.wordArray, config);
  }
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

const AP = {
  allCaps,
  alwaysLower: [
    ...prep,
    ...articles,
    ...coordConj,
    ...subConj,
    ...lowercasePartOfNames,
    ...species
  ],
  alwaysLowerLength: 4,
  alwaysUpper: [],
  hyphen: null,
  name: "Associated Press"
};

const APA = {
  allCaps,
  alwaysLower: [
    ...prep,
    ...articles,
    ...coordConj,
    ...subConj,
    ...lowercasePartOfNames,
    ...species
  ],
  alwaysLowerLength: 4,
  alwaysUpper: [],
  hyphen: null,
  name: "American Psychological Association"
};

const CMS = {
  allCaps,
  alwaysLower: [
    ...chi,
    ...articles,
    ...prep,
    ...lowercasePartOfNames,
    ...species
  ],
  alwaysLowerLength: null,
  alwaysUpper: [],
  hyphen: null,
  name: "Chicago Manual of Style"
};

const MLA = {
  allCaps,
  alwaysLower: [
    ...articles,
    ...prep,
    ...coordConj,
    ...lowercasePartOfNames,
    ...species
  ],
  alwaysLowerLength: null,
  alwaysUpper: [],
  hyphen: null,
  name: "Modern Language Association"
};

const NYT = {
  allCaps,
  alwaysLower: [
    ...nyLowerCase,
    ...articles,
    ...lowercasePartOfNames,
    ...species
  ],
  alwaysLowerLength: null,
  alwaysUpper: nyUpperCase,
  hyphen: null,
  name: "New York Times"
};

const WP = {
  allCaps,
  alwaysLower: [...articles, ...coordConj, ...prep, ...species],
  alwaysLowerLength: 5,
  alwaysUpper: [],
  hyphen: null,
  name: "Wikipedia"
};

// Functions run beforehand -- convert to em dash, smartquotes, trim
// Functions run to individual words - match whether word is on list, add word position here
// Functions run to whole sentences - match whether punctuation, phrase, etc. is on list

export default function capitalizer(style, text) {
  const config = getConfig(style);
  const titles = text.split(/\n/);
  const titlesArray = [];

  titles.forEach(title => {
    let titleObj = new Title(title, config);
    titlesArray.push(titleObj);
  });

  return titlesArray;
}
