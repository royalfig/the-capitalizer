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
  "including",
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
  "v",
  "vs",
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

const lowercasePartOfNames = ["da", "de", "von", "van", "y"];

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
  "familiaris",
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
  "hanglu",
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
  "asinus",
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
  "limonium",
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
  "megalodon",
  "erectus"
];

// const verbalPhrases = /abide[ds]? by|account(ed)?[s]? for|add(ed)?[s]? up|advise[ds]? against|agree[ds]? with|allow(ed)?[s]? for|appeal(ed)?[s]? to|appl(ie[ds])?[y]? for|back(ed)?[s]? away|back(ed)?[s]? down|back(ed)?[s]? up|black(ed)?[s]? out|block(ed)?[s]? off|blow(ed)?[s]? up|boil(ed)?[s]? down to|boot(ed)?[s]? up|break away|break down|break into|break out|break out of|break up|bring up|brush(ed)?[s]? up on|bump(ed)?[s]? into|burn(ed)?[s]? out|call(ed)?[s]? back|call(ed)?[s]? off|calm(ed)?[s]? down|carry on|carry out|check(ed)?[s]? in|check(ed)?[s]? out|clam up|clamp(ed)?[s]? down on|come across|come forward|count(ed)?[s]? on|cut[s]? down on|cut[s]? out|deal[ts]? with|die[sd]? down|drag on|draw(ed)?[s]? up|dress(ed)?[s]? up|drop(ped)?[s]? in|drop(ped)?[s]? off|drop out|ease[sd]? off|end(ed)?[s]? in|end(ed)?[s]? up|fall through|figure[sd]? out|fill(ed)?[s]? out|find out|focus(ed)?[s]? on|get along|get at|get away|get by|get in|get into|get off|get on|get on with|get out|get out of|get over|get rid of|get together|get up|give in|give up|go through|grow(ed)?[s]? up|hand(ed)?[s]? in|hand(ed)?[s]? out|hang up|hold on|hurry up|iron(ed)?[s]? out|join(ed)?[s]? in|join(ed)?[s]? up|keep on|keep up with|kick(ed)?[s]? off|leave out|let down|look after|look(ed)?[s]? down on|look(ed)?[s]? on|look(ed)?[s]? for|look(ed)?[s]? forward to|look(ed)?[s]? up to|make fun of|make up|mix up|move(ed)?[s]? in|move(ed)?[s]? out|nod off|own(ed)?[s]? up|pass(ed)?[s]? away|pass(ed)?[s]? out|pay back|put off|put on|put out|put up|pick(ed)?[s]? up|point(ed)?[s]? out|rely on|rule[sd]? out|run away|run into|run out of|set[s]? off|set[s]? up|shop around|show(ed)?[s]? off|show(ed)?[s]? up|sit down|stand up|take after|take care of|take off|take on|take out|tell off|think over|try on|tune[sd]? in|turn(ed)?[s]? down|turn(ed)?[s]? on|use[sd]? up|watch[e]?[sd]? out|wear out|wipe off/gi;

const verbalPhrases = /\bact(ed|ing|s)? (like|up)|\badd(ed|ing|s)? (up)|\bask(ed|ing|s)? (after|out)|\bback(ed|ing|s)? (down|off|up)|\bbargain(ed|ing|s)? (for)|back(ed|ing|s)? (down|off|up)|(are|be|is|was|were) (off|over)|(bear(?:ed|ing|s)?|\bborn?e?) (out)|\bbeat(en|ing|s)? (off|out|up)|beg(ged|ging|s)? (off)|\bblow(ed|n|s)? (off|up)|\bbone(d|ing|s)? (up)|(\bbreak(?:s|ing)?|broken?) (down|in|into|off|out|up)|(\bbring(?:ing|s)?|\bbrought) (about|back|off|on|round|up)|brush(ed|es|ing)? (up)|burn(ed|ing|s)? (down|up)|butt(s|ing|ed)? (in)|butter(ed|ing|s)? (up)|\bcall(ed|ing|s) (off|on|up)?|\bcalm(ed|ing|s)? (down)|(\bcare(?:s|d)?|\bcaring) (for)|(\bcarry|carrie(?:s|d)|\bcarrying) (off|on|out)|\bcash(ed|es|ing)? (in)|(\bcatch(?:es|ed|ing)?|caught) (on|up)|check(ed|ing|s)? (in|off|out)|\bcheer(ed|ing|s)? (on|up)|\bchew(ed|ing|s)? (out|up)|\bchicken(ed|ing|s)? (out)|\bchip(ped|ping|s)? (in)|\bclamm?(ed|ing|s) (up)|(\bcomes?|\bcame|\bcoming) (about|across|down|in|into|off|out|round|to|up)|\bcount(ed|ing|s)? (on)|\bcrop(ped|ping|s)? (up)|cross(ed|es|ing)? (out)|\bcut(ting|s)? (back|down|off)|(die(?:d|s)?|dying) (out)|(do(?:es|ing)?|did) (away|in|over|up)|drag(ged|es|ing)? (on)|\bdraw(s|ing|n)? (out)|\bdrop(ped|ping|s)? (by|in|off|out)|(\beat(?:s|en)?|\bate) (out)|egg(s|ed|ing)? (on)|\bend(ed|ing|s)? (up)|\bface?(d|ing|s)? (up)|(\bfall(?:s|en|ing)?|\bfell) (about|back|for|out|through)|(\bfeels?|\bfelt) (up)|figure?(d|ing|s)? (out)|\bfill(ed|ing|s)? (in|out)|(\bfind(s|ing)?|\bfound) (out)|\bfollow(ed|ing|s)? (up)|(\bget(?:s|ting)?|\bgot(?:ten)?) (across|along|around|at|away|by|down|in|off|on|out|over|round|through|up)|(\bgive(?:s|n)?|\bgave) (away|in|off|out|over|up)|(\bgo(?:es|ing)?|\bwent) (back|down|for|in|off|on|out|round|through|with)|goof(ed|ing|s)? (off)|(\bgrow(?:n|s|ing)?|\bgrew) (on|up)|\bhand(ed|ing|s)? (in|out|over)|(\bhang(?:s|ing)?|\bhung) (in|out|over)|\bhit(s|ting)? (upon)|(\bhold(?:s|ing)?|\bheld) (on|out|up|with)|\biron(ed|ing|s)? (out)|\bjack(ed|ing|s)? (in|off|up)|jump(ed|ing|s)? (all)|(\bkeep(?:s|ing)?|\bkept) (on|up)|\bkick(ed|ing|s)? (out)|\bknock(ed|ing|s)? (out)|(\blay(?:s|ing)?|\blaid) (down|off)|(\bleaves?|\bleft|\bleaving) (out)|\blet(ting|s)? (down|in|off|on|out|up)|live?(d|ing|s)? (down|up)|\blook(ed|ing|s)? (after|back|down|for|forward|in|into|like|on|over|round|up|)|\bluck(ed|ing|s)? (out)|(\bmake?(?:ing|s)?|\bmade) (for|off|out|up)|\bmark(ed|ing|s)? (down|up)|miss(ed|es|ing)? (out)|(\bmistake?(?:n|s|ing)?|\bmistook) (for)|\bmix(es|ed|ing)? (up)|\bnod(ded|ding|s)? (off)|out(ed|ing|s)? (on)|\bown(ed|ing|s)? (up)|\bpack(ed|ing|s)? (in)|\bpan(ned|ning|s)? (out)|\bpass(ed|es|ing)? (away|out)|(\bpay(?:s|ing)?|paid) (back)|\bpick(ed|ing|s)? (on|out|up)|pitch(ed|ing|es)? (in)|play(s|ing|ed)? (up)|point(ed|ing|s)? (out)|pull(ed|ing|s)? (off|over)|push(ed|ing|es)? (on)|put(s|ting)? (across|away|back|down|forward|in|off|on|out|through|up)|rip(ped|ping|s)? (off)|round(ed|ing|s)? (off)|(\brun(?:s|ning)?|ran) (down|in|into|out|to|up)|(\bsee(?:s|ing|n)|saw) (through)|\bsend?t?(s|ing)? (up)|\bset(s|ting)? (about|back|in|off|on|out|up)|\bshow(s|ing|n)? (up)|\bsi?a?nk(s|ing)? (in)|\bslip(ped|ping|s)? (up)|\bsoak(ed|ing|s)? (up)|\bsort(ed|ing|s)? (out)|\bspeak(ed|ing|s)? (up)|(\bstand(?:s|ing)?|\bstood) (by|for|in|out|up)|\bstep(ped|ping|s)? (down|up)|\bstick(ed|ing|s)? (up)|\btake?(ing|n|s)? (after|back|down|in|off|on|out|over|to|up)|\btalk(ed|ing|s)? (out)|(\bthink(?:s|ing)?|\bthought) (over)|\bthrow(s|ing|n)? (away|out|up)|\btick(ed|ing|s)?(off)|(\btie(?:s|d)?|\btying) (in)|\btrack(ed|ing|s)? (down)|(\btry(?:ing)?|\btrie(?:s|d)) (on|out)|\bturn(ed|ing|s)? (around|down|in|into|off|on|out|up)|\bwait(ed|ing|s)? (for|on)|\bwake?(d|ing|s)? (up)|\bwatch(ed|ing|es)? (out)|(\bwear(?:s|ing)|\bworn) (off|out)|\bwork(ed|ing|s) (out)|\bwrap(ped|ping|s)? (up)|(\bwrites?|\bwritten|\bwrote) (down|off|up)|\bzonk(ed|ing|s)? (out)/gi;

const chi = ["and", "as", "but", "for", "or", "nor"];

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
  "v",
  "vs",
  "via"
];

const nyUpperCase = ["no", "nor", "not", "off", "out", "so", "up"];

export {
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
};
