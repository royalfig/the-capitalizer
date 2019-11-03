import { prep, coordConj, articles, spec } from "./lists";
// import { debounce } from "../../node_modules/debounce";
import { throttle, debounce } from "../../node_modules/throttle-debounce";
import posTagger from "../../node_modules/wink-pos-tagger";

const tagger = posTagger();

const decoder = {
  CC: "Coordinating conjunction",
  CD: "Cardinal number",
  DT: "Determiner",
  EX: "Existential there",
  FW: "Foreign word",
  IN: "Preposition or subordinating conjunction",
  JJ: "Adjective",
  JJR: "Adjective, comparative",
  JJS: "Adjective, superlative",
  LS: "List item marker",
  MD: "Modal",
  NN: "Noun, singular or mass",
  NNS: "Noun, plural",
  NNP: "Proper noun, singular",
  NNPS: "Proper noun, plural",
  PDT: "Predeterminer",
  POS: "Possessive ending",
  PRP: "Personal pronoun",
  PRP$: "Possessive pronoun",
  RB: "Adverb",
  RBR: "Adverb, comparative",
  RBS: "Adverb, superlative",
  RP: "Particle",
  SYM: "Symbol",
  TO: "to",
  UH: "Interjection",
  VB: "Verb, base form",
  VBD: "Verb, past tense",
  VBG: "Verb, gerund or present participle",
  VBN: "Verb, past participle",
  VBP: "Verb, non-3rd person singular present",
  VBZ: "Verb, 3rd person singular present",
  WDT: "Wh-determiner",
  WP: "Wh-pronoun",
  WP$: "Possessive wh-pronoun",
  WRB: "Wh-adverb"
};

const alwaysCapped = [
  "NN",
  "NNS",
  "NNP",
  "NNPS",
  "PRP",
  "PRP$",
  "RB",
  "RBR",
  "RBS",
  "VB",
  "VBD",
  "VBG",
  "VBN",
  "VBP",
  "VBZ",
  "WDT",
  "WP$",
  "WRB"
];

const adjectives = ["JJ", "JJR", "JJS"];

function decode(posArray) {
  const decodedArray = [];
  posArray.forEach(element => {
    const pos = element.pos;
    decodedArray.push(decoder[pos]);
  });
  return decodedArray;
}

function capFirstLetter(word) {
  // Put in function to test for '
  const regExp = /'\w/;
  if (!regExp.test(word)) {
    return word.replace(/\w/, match => match.toUpperCase());
  } else {
    return word;
  }
}

function capFirstAndLastLetter(titles) {
  if (titles.length > 0) {
    const first = titles.slice(0, 1)[0].normal;
    const firstCap = capFirstLetter(first);
    const lastIndex = titles.indexOf(titles.slice(-1)[0]);
    const last = titles.slice(-1)[0].normal;
    const lastCap = capFirstLetter(last);
    const result = [];
    result[0] = firstCap;
    result[lastIndex] = lastCap;
    return result;
  }
}

function alwaysCap(titles) {
  const nounArray = [];
  titles.map((word, index) => {
    if (alwaysCapped.includes(word.pos)) {
      nounArray[index] = capFirstLetter(word.normal);
    }
  });
  return nounArray;
}

function capAdjectives(titles, style) {
  const adjectiveArray = [];

  titles.map((word, index) => {
    if (adjectives.includes(word.pos)) {
      adjectiveArray[index] = capFirstLetter(word.normal);
    }
  });

  return adjectiveArray;
}

function punctuationFix(title) {
  return title.replace(/(\s)(\')|(\s)(:)/g, "$2");
}

function threeOrMore(title, style) {
  const threeOrMoreArr = [];
  if (["AP", "APA", "NYT"].includes(style)) {
    title.map((word, idx) => {
      if (word.normal.length > 3) {
        threeOrMoreArr[idx] = capFirstLetter(word.normal);
      }
    });
  }
  return threeOrMoreArr;
}

function capitalize(titles, style) {
  const finalTitleArr = [];
  if (titles.length > 0) {
    titles.forEach((word, idx) => (finalTitleArr[idx] = word.normal));
    const noun = alwaysCap(titles);
    noun.forEach((word, idx) => (finalTitleArr[idx] = word));

    const adj = capAdjectives(titles, style);
    adj.forEach((word, idx) => (finalTitleArr[idx] = word));

    const threePlus = threeOrMore(titles, style);
    threePlus.forEach((word, idx) => (finalTitleArr[idx] = word));

    const firstAndLastLetter = capFirstAndLastLetter(titles);
    firstAndLastLetter.forEach((word, idx) => (finalTitleArr[idx] = word));

    const finalTitle = finalTitleArr.join(" ");
    const TitleWithPunctuationFixed = punctuationFix(finalTitle);
    return TitleWithPunctuationFixed;
  }
}

class Title {
  constructor(title, style) {
    this.original = title.trim();
    this.lowercase = this.original.toLowerCase();
    this.pos = tagger.tagSentence(this.lowercase);
    console.log(this.pos);
    this.decoded = decode(this.pos);
    this.capitalized = capitalize(this.pos, style);
  }
}

export default function capitalizer(style, text) {
  // Split titles into individuals
  const titles = text.split(/\n/);
  const titlesArray = [];

  titles.forEach(element => {
    let titleObj = new Title(element, style);
    titlesArray.push(titleObj);
  });

  return titlesArray;
  // console.log(titlesArray);
  // const posObject = [];
  // originalTitles.forEach(title => posObject.push(tagger.tagSentence(title)));
  // console.log(posObject);
  // const titleArray = [];

  // originalTitles.forEach(element => {
  //   titleArray.push(
  //     element.replace(/\s\w|^\w/g, letter => {
  //       return letter.toUpperCase();
  //     })
  //   );
  // });

  // const wordArray = [];

  // titleArray.forEach(element => {
  //   wordArray.push(element.split(" "));
  // });

  // if (style === "AP" || style === "APA" || style === "NYT") {
  //   // Lowercase prepositions and articles

  //   for (let title in wordArray) {
  //     for (let word in wordArray[title]) {
  //       if (
  //         wordArray[title][word].length < 4 &&
  //         [...prep, ...articles].includes(wordArray[title][word].toLowerCase())
  //       ) {
  //         wordArray[title][word] = wordArray[title][word].toLowerCase();
  //       }
  //     }
  //   }
  // } else {
  //   // Lowercase prepositions and articles
  //   for (let title in wordArray) {
  //     for (let word in wordArray[title]) {
  //       if (
  //         [...prep, ...articles].includes(wordArray[title][word].toLowerCase())
  //       ) {
  //         wordArray[title][word] = wordArray[title][word].toLowerCase();
  //       }
  //     }
  //   }
  // }

  // const finalTitle = [];
  // for (let word in wordArray) {
  //   finalTitle.push(
  //     wordArray[word]
  //       .join(" ")
  //       .replace(/\w/, firstLetter => firstLetter.toUpperCase())
  //   );
  // }

  // return finalTitle;
}
