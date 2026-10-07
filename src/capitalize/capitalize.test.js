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
});
