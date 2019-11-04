<template>
  <aside class="container explainer-container">
    <h2 class="style-rules">Style Rules</h2>

    <article class="explainer" v-for="name in sortedStyles" :key="name.id">
      <h3 class="style">{{ name.style }}</h3>
      <small class="badge">{{ name.badge }}</small>

      <div v-for="(item, index) in name.rules" :key="index">
        <p class="rule" v-html="item.rule"></p>
        <p class="explanation" v-html="item.example"></p>
      </div>
    </article>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      styles: [
        {
          id: "CMS",
          badge: "Academic",
          style: "Chicago Manual of Style (CMS)",
          rules: [
            {
              rule: "Capitalize the first and last word of the title",
              example:
                "the Grapes of wrath ➜ <span class='changed'>T</span>he Grapes of <span class='changed'>W</span>rath"
            },
            {
              rule:
                "Capitalize nouns, pronouns, verbs, adjectives, and conjunctions (but not the coordinating conjunctions <em>and</em>, <em>but</em>, <em>for</em>, or, and <em>nor</em>)",
              example: ""
            },
            {
              rule:
                "Lowercase all prepositions unless they are used adverbially or adjectivally or when they are part of a Latin expression",
              example: ""
            },
            {
              rule:
                "Lowercase articles (<em>the</em>, <em>a</em>, and <em>an</em>)",
              example: ""
            },
            {
              rule:
                "Lowercase &ldquo;to&rdquo; as a preposition (see no. 3), but also lowercase it as part of an infinite as in &ldquo;to run&rdquo;",
              example: ""
            },
            {
              rule:
                "Lowercase the parts of proper names that would normally be lowercase, like the &ldquo;von&rdquo; in Wolfgang von Mozart or the &ldquo;von&rdquo; in Wolfgang von Goethe",
              example: ""
            },
            {
              rule:
                "Lowercase the second part of a species name, as in <em>Homo sapiens</em>",
              example: ""
            },
            { rule: "Hyphens: it&apos;s a whole thing", example: "" }
          ]
        },
        {
          id: "AP",
          badge: "Journalistic",
          style: "Associated Press (AP)",
          rules: [
            {
              rule:
                "Capitalize the first and last word of the title and the first word of any subtitle",
              example:
                "the grapes of wrath: a book about wine &rarr; The Grapes of Wrath: A Book About Wine"
            },
            {
              rule:
                "Capitalize all major words in the title, including those after a hyphen. Major words: nouns, verbs, adjectives, adverbs, and pronouns",
              example: ""
            },
            {
              rule: "Capitalize all words with four or more letters",
              example: ""
            },
            {
              rule:
                "Lowercase everything else, which includes the minor words, that is, conjunctions, articles, and prepositions",
              example: ""
            }
          ]
        },
        {
          id: "APA",
          badge: "Academic",
          style: "American Psychological Association (APA)",
          rules: [
            {
              rule: "Capitalize all words of four letters or more.",
              example: ""
            },
            {
              rule:
                "Capitalize major words, including verbs, nouns, adjectives, adverbs, and pronouns.",
              example: ""
            },
            {
              rule:
                "Lowercase conjunctions, articles, and prepositions (when shorter than four letters)",
              example: ""
            },
            {
              rule: "Capitalize each word in a hyphenated compound",
              example: ""
            },
            {
              rule:
                "Capitalize the first word in a subtitle (a word appearing after a colon or a dash",
              example: ""
            }
          ]
        },
        {
          id: "NYT",
          badge: "Journalistic",
          style: "New York Times (NYT)",
          rules: [
            {
              rule:
                "Capitalize nouns, pronouns, verbs, and all words with four or more letters"
            },
            { rule: "Capitalize the first and last word" },
            { rule: "Capitalize no, nor, not, off, out, so, up" },
            {
              rule:
                "Capitalize prepositions with fewer than four letters when they are used adverbally or to modify a verb"
            },
            { rule: "Capitalize the first word of a title" },
            {
              rule:
                "Capitalize &ldquo;for&rdquo; when it takes the place of a verb to mean support or advocate"
            },
            {
              rule:
                "Lowercase a, and, as, at, but, by, en, for, if, in, of, on, or, the, to, v., vs., via"
            },
            { rule: "Lowercase the &ldquo;to&rdquo; in infinitives" },
            {
              rule:
                "Capitalize hyphenated compounds unless the compound is formed from a prefix of two or three letters that is used to separate doubled vowels. If a prefix has four letters or more, capitalize both words in the compound. "
            }
          ]
        },
        {
          id: "MLA",
          badge: "Academic",
          style: "Modern Language Association (MLA)",
          rules: [
            { rule: "Capitalize the first word and last word", example: "" },
            {
              rule: "Capitalize the first word in a subtitle or after a hyphen",
              example: ""
            },
            {
              rule:
                "Capitalize nouns, pronouns, verbs, adjectives, adverbs, and subordinating conjunctions",
              example: ""
            },
            {
              rule:
                "Lowercase articles, prepositions, coordinating conjunctions, and the &ldquo;to&rdquo; in infinitives",
              example: ""
            }
          ]
        },
        {
          id: "WP",
          badge: "Academic",
          style: "Wikipedia (WP)",
          rules: [
            { rule: "Capitalize the first and last word of the title" },
            {
              rule:
                "Capitalize adjectives, adverbs, nouns, subordinating conjunctions, and verbs"
            },
            { rule: "Capitalize prepositions of five letters or more" },
            {
              rule:
                "Capitalize prepositions when used in phrasal verbs or compound prepositions"
            },
            { rule: "Lowercase articles" },
            { rule: "Lowercase coordinating conjunctions" },
            { rule: "Lowercase prepositions of four letters or fewer" },
            { rule: "Lowercase the &ldquo;to&rdquo; in infinitives" },
            {
              rule:
                "Follow standard practice in hyphenated compounds. If no standard exists, lowercase the word after the hyphen"
            },
            {
              rule:
                "Capitalize the first word in a subtitle after a colon or dash"
            }
          ]
        }
      ]
    };
  },
  computed: {
    sortedStyles() {
      return this.styles.slice(0).sort((a, b) => {
        var idA = a.id;
        var idB = b.id;
        if (idA < idB) {
          return -1;
        }
        if (idA > idB) {
          return 1;
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.style-rules {
  color: #333;
  font-weight: 600;
}

.style {
  display: inline;
}

.badge {
  padding: 2px 4px;
  font-weight: 700;
  font-size: 75%;
  text-transform: uppercase;
  color: #fff;
  background-color: #333;
  border-radius: 5px;
  margin-left: 5px;
}

.rule {
  margin-left: 1.5em;
  position: relative;

  &:before {
    content: '';
    width: 0.25em;
    height: 0.25em;
    background-color: #333;
    border-radius: 50%;
    position: absolute;
    top: 0.75em;
    left: -0.75em;
  }
}

.explanation {
  margin-left: 2em;

  &:before {
    content: 'EXAMPLE:';
    font-size: 75%;
    margin-right: 1em;
  }
}
</style>

