const prep = [
  "aboard",
  "about",
  "above",
  "across",
  "after",
  "against",
  "along",
  "alongside",
  "amid",
  "amidst",
  "among",
  "amongst",
  "anti",
  "around",
  "astride",
  "at",
  "atop",
  "before",
  "behind",
  "below",
  "beneath",
  "beside",
  "besides",
  "between",
  "beyond",
  "but",
  "by",
  "c.",
  "ca.",
  "circa",
  "concerning",
  "considering",
  "despite",
  "down",
  "during",
  "except",
  "excepting",
  "excluding",
  "following",
  "for",
  "from",
  "in",
  "inside",
  "into",
  "like",
  "minus",
  "near",
  "next",
  "of",
  "off",
  "nor",
  "on",
  "onto",
  "opposite",
  "or",
  "out",
  "outside",
  "over",
  "past",
  "per",
  "plus",
  "regarding",
  "round",
  "save",
  "since",
  "than",
  "this",
  "through",
  "throughout",
  "till",
  "to",
  "toward",
  "towards",
  "under",
  "underneath",
  "unlike",
  "until",
  "unto",
  "up",
  "upon",
  "versus",
  "via",
  "with",
  "within",
  "without"
];

const coordConj = ["and", "but", "for", "nor", "or", "so", "yet"];

const subConj = [
  "after",
  "although",
  "because",
  "before",
  "if",
  "since",
  "so",
  "than",
  "though",
  "unless",
  "until",
  "when",
  "whenever",
  "where",
  "whereas",
  "wherever",
  "while"
];

const articles = ["a", "an", "the"];

const allCaps = [
  "AAA",
  "AAAS",
  "ACLS",
  "ADA",
  "AKA",
  "ASAP",
  "ATM",
  "AWOL",
  "BA",
  "BC",
  "BCE",
  "BS",
  "BYOB",
  "CE",
  "CEO",
  "CFO",
  "CIA",
  "CSS",
  "DIY",
  "DJ",
  "DOB",
  "EU",
  "EFL",
  "ESL",
  "ETA",
  "FAQ",
  "FHA",
  "FYI",
  "GMO",
  "HTML",
  "HR",
  "ID",
  "II",
  "III",
  "IQ",
  "IV",
  "IX",
  "JD",
  "JS",
  "MA",
  "MD",
  "MIA",
  "MLB",
  "NBA",
  "NFL",
  "NYC",
  "NRA",
  "OCD",
  "OG",
  "PC",
  "POW",
  "PR",
  "PR",
  "PS",
  "RIP",
  "RSVP",
  "SOL",
  "SOS",
  "SVP",
  "TBA",
  "TGIF",
  "TV",
  "UK",
  "US",
  "USA",
  "V",
  "VI",
  "VII",
  "VIII",
  "VP",
  "WWI",
  "WWII",
  "WWW",
  "X"
];

const lowercasePartOfNames = ["de", "von", "van", "y"];

const species = [
  "dromedarius",
  "africana",
  "pacos",
  "maximus",
  "gaurus",
  "cervicapra",
  "rattus",
  "bubalis",
  "cafer",
  "domesticus",
  "jubatus",
  "bennettii",
  "tristis",
  "palustris",
  "lupus familiaris",
  "vulpes",
  "gangeticus",
  "camelopardalis",
  "virginianus",
  "amphibius",
  "caballus",
  "splendens",
  "musculus",
  "domesticus",
  "flaviviridis",
  "naja",
  "eupatria",
  "molurus",
  "canadensis hanglu",
  "hannah",
  "scolopaccus",
  "pardus",
  "leo",
  "tragocamelus",
  "cristatus",
  "livia",
  "cuniculus",
  "mucosa",
  "mulatta",
  "unicornis",
  "leucogeranus",
  "tigris",
  "africanus asinus",
  "scrofa",
  "lupus",
  "quagga",
  "sapiens",
  "pumila",
  "aridinarifolia",
  "paradisicum",
  "benghalensis",
  "mungo",
  "nigrum",
  "melongena",
  "fruitscence",
  "carota",
  "aromaticum",
  "sativum",
  "herbaceum",
  "sativas",
  "koenigii",
  "oleifera",
  "sativum",
  "officinale",
  "auicus",
  "guava",
  "inermis",
  "biffoeus",
  "vulgare",
  "Limonium",
  "sativa",
  "mays",
  "indica",
  "arvensis",
  "aureum",
  "indica",
  "cepa",
  "aurantium",
  "sativus",
  "tubersum",
  "sativus",
  "cagjan",
  "album",
  "oleracea",
  "tobaccum",
  "esculentum",
  "sanctum",
  "longa",
  "vulgaris",
  "aestivum",
  "migratorius",
  "cynocephalus",
  "rex",
  "impennis",
  "megalodon"
];

const verbalPhrases = [
  "abide by",
  "account for",
  "add up",
  "advise against",
  "agree with",
  "allow for",
  "appeal to",
  "apply for",
  "back away",
  "back down",
  "back up",
  "black out",
  "block off",
  "blow up",
  "boil down to",
  "boot up",
  "break away",
  "break down",
  "break into",
  "break out",
  "break out of",
  "break up",
  "bring up",
  "brush up on",
  "bump into",
  "burn out",
  "call back",
  "call off",
  "calm down",
  "carry on",
  "carry out",
  "check in",
  "check out",
  "clam up",
  "clamp down on",
  "come across",
  "come forward",
  "count on",
  "cut down on",
  "cut out",
  "deal with",
  "die down",
  "do without",
  "drag on",
  "draw up",
  "dress up",
  "drop in",
  "drop off",
  "drop out",
  "ease off",
  "end in",
  "end up",
  "fall through",
  "figure out",
  "fill out",
  "find out",
  "focus on",
  "get along",
  "get at",
  "get away",
  "get by",
  "get in",
  "get into",
  "get off",
  "get on",
  "get on with",
  "get out",
  "get out of",
  "get over",
  "get rid of",
  "get together",
  "get up",
  "give in",
  "give up",
  "go through",
  "grow up",
  "hand in",
  "hand out",
  "hang up",
  "hold on",
  "hurry up",
  "iron out",
  "join in",
  "join up",
  "keep on",
  "keep up with",
  "kick off",
  "leave out",
  "let down",
  "look after",
  "look down on",
  "look on",
  "look for",
  "look forward to",
  "look up to",
  "make fun of",
  "make up",
  "mix up",
  "move in",
  "move out",
  "nod off",
  "own up",
  "pass away",
  "pass out",
  "pay back",
  "put off",
  "put on",
  "put out",
  "put up",
  "pick up",
  "point out",
  "rely on",
  "rule out",
  "run away",
  "run into",
  "run out of",
  "set off",
  "set up",
  "shop around",
  "show off",
  "show up",
  "sit down",
  "stand up",
  "take after",
  "take care of",
  "take off",
  "take on",
  "take out",
  "tell off",
  "think over",
  "try on",
  "turn down",
  "use up",
  "watch out",
  "wear out",
  "wipe off"
];

export {
  prep,
  coordConj,
  subConj,
  articles,
  allCaps,
  lowercasePartOfNames,
  species,
  verbalPhrases
};
