import { describe, expect, it } from "vitest";
import capitalizer from "./capitalize.js";

function capitalize(style, text) {
  return capitalizer(style, text).map(title => title.capitalized);
}

describe("capitalizer (baseline, captured from current production behavior)", () => {
  it("capitalizes major words and lowercases short function words (AP)", () => {
    expect(capitalize("AP", "the lord of the rings")).toEqual([
      "The Lord of the Rings"
    ]);
    expect(capitalize("AP", "a tale of two cities")).toEqual([
      "A Tale of Two Cities"
    ]);
    expect(capitalize("AP", "to kill a mockingbird")).toEqual([
      "To Kill a Mockingbird"
    ]);
  });

  it("uppercases words on the allCaps list regardless of position (AP)", () => {
    expect(capitalize("AP", "diy project for beginners")).toEqual([
      "DIY Project for Beginners"
    ]);
  });

  it("keeps species epithets lowercase except at title boundaries (CMS/MLA/NYT, not AP/APA/WP)", () => {
    const title = "the mysterious case of homo sapiens today";
    expect(capitalize("CMS", title)).toEqual([
      "The Mysterious Case of Homo sapiens Today"
    ]);
    expect(capitalize("MLA", title)).toEqual([
      "The Mysterious Case of Homo sapiens Today"
    ]);
    expect(capitalize("NYT", title)).toEqual([
      "The Mysterious Case of Homo sapiens Today"
    ]);
    expect(capitalize("AP", title)).toEqual([
      "The Mysterious Case of Homo Sapiens Today"
    ]);
    expect(capitalize("APA", title)).toEqual([
      "The Mysterious Case of Homo Sapiens Today"
    ]);
    expect(capitalize("WP", title)).toEqual([
      "The Mysterious Case of Homo Sapiens Today"
    ]);
  });

  it("converts straight quotes/apostrophes to smart quotes and double dashes to an em dash", () => {
    expect(capitalize("AP", "war--peace and other stories")).toEqual([
      "War—Peace and Other Stories"
    ]);
    expect(capitalize("AP", "it's a 'wonderful' life")).toEqual([
      "It’s a ‘Wonderful’ Life"
    ]);
  });

  it("capitalizes the particle of a phrasal verb via the verbalPhrases rule", () => {
    expect(capitalize("AP", "he gave up smoking")).toEqual([
      "He Gave Up Smoking"
    ]);
  });

  it("uppercases a trailing abbreviation period inside U.S.", () => {
    expect(capitalize("AP", "the u.s. and nato")).toEqual([
      "The U.S. and Nato"
    ]);
  });

  it("preserves colon-introduced subtitles and capitalizes the word after the colon", () => {
    expect(capitalize("AP", "the catcher in the rye: a novel")).toEqual([
      "The Catcher in the Rye: A Novel"
    ]);
  });

  it("splits on newlines into one title per line", () => {
    expect(capitalize("AP", "the hobbit\nthe two towers")).toEqual([
      "The Hobbit",
      "The Two Towers"
    ]);
  });

  // The acronyms below were added after running ~5000 real book and journal
  // article titles (Open Library + Crossref) through the capitalizer and
  // checking which real-world acronyms survived. See the allCaps list in
  // lists.js for the full set.
  it("preserves common acronyms found in real-world titles", () => {
    expect(capitalize("AP", "a study of dna and rna in cells")).toEqual([
      "A Study of DNA and RNA in Cells"
    ]);
    expect(capitalize("AP", "nasa and the cold war")).toEqual([
      "NASA and the Cold War"
    ]);
    expect(capitalize("AP", "an introduction to ai and crispr")).toEqual([
      "An Introduction to AI and CRISPR"
    ]);
  });

  it("preserves an allCaps word even when wrapped in parentheses", () => {
    // Regression test: the punctuation-stripping regex in doCapitalization()
    // originally handled [] but not (), so "(usa)" never matched the allCaps
    // list even though "USA" was on it.
    expect(capitalize("AP", "trade policy in the (usa) today")).toEqual([
      "Trade Policy in the (USA) Today"
    ]);
    expect(capitalize("AP", "explainable ai (xai) for trees")).toEqual([
      "Explainable AI (XAI) for Trees"
    ]);
  });

  it("does NOT force-uppercase words that are real acronyms but collide with common English words", () => {
    // These are deliberately left off the allCaps list: adding them would
    // make the algorithm wrong far more often than right, since allCaps
    // matches are unconditional (any position, every occurrence).
    // who -> World Health Organization, but "who" is a very common relative
    // pronoun ("The Man Who Would Be King").
    expect(capitalize("AP", "the man who would be king")).toEqual([
      "The Man Who Would Be King"
    ]);
    // go -> Gene Ontology, but "go" is an extremely common verb.
    expect(capitalize("AP", "where we go from here")).toEqual([
      "Where We Go From Here"
    ]);
    // us -> United States, but "us" is a very common pronoun.
    expect(capitalize("AP", "save us from ourselves")).toEqual([
      "Save Us From Ourselves"
    ]);
    // ms -> manuscript/multiple sclerosis, but collides with the "Ms."
    // honorific.
    expect(capitalize("AP", "ms. smith goes to washington")).toEqual([
      "Ms. Smith Goes to Washington"
    ]);
  });

  // These two phrasal verbs were confirmed missing from the verbalPhrases
  // regex by hand-checking real corpus titles against each style's own
  // rules: "out" wasn't in the "look" particle list, and "dig" wasn't in
  // the regex at all.
  it("capitalizes phrasal verbs that were previously missed by the regex", () => {
    for (const style of ["AP", "APA", "CMS", "NYT", "WP"]) {
      expect(capitalize(style, "look out, secret seven")).toEqual([
        "Look Out, Secret Seven"
      ]);
      expect(capitalize(style, "digging up the bones")).toEqual([
        "Digging Up the Bones"
      ]);
    }
  });

  // MLA's own rule has no adverbial/phrasal-verb exception (confirmed
  // against the MLA Handbook): prepositions and coordinating conjunctions
  // stay lowercase in the middle of a title regardless of length or
  // whether they're part of a phrasal verb. Every other style here does
  // have that exception.
  it("does not capitalize phrasal-verb particles for MLA", () => {
    expect(capitalize("MLA", "turn off the lights")).toEqual([
      "Turn off the Lights"
    ]);
    expect(capitalize("MLA", "running out of time")).toEqual([
      "Running out of Time"
    ]);
  });

  it("still capitalizes phrasal-verb particles for the other styles", () => {
    expect(capitalize("AP", "turn off the lights")).toEqual([
      "Turn Off the Lights"
    ]);
    expect(capitalize("CMS", "turn off the lights")).toEqual([
      "Turn Off the Lights"
    ]);
  });
});
