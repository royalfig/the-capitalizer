<template>
  <aside class="container explainer-container">
    <div>
      <h2 class="style-rules">The Style Rules</h2>
      <p>Ideally, we&apos;d have one simple set of rules for capitalizing titles. In reality, though, the rules for title case—what to capitalize and what not to capitalize in a title—slightly differ according to the publication&apos;s style guide. The Capitalizer eases this pain of sorting through all these rules by capitalizing the titles for you! Nonetheless, the most popular rules for capitalization are listed below for your reference.</p>
    </div>
    <article class="explainer" v-for="name in sortedStyles" :key="name.id" :id="name.id+'_rule'">
      <h3 class="style">{{ name.style }}</h3>
      <small class="badge">{{ name.badge }}</small>
      <ul class="rule-container">
        <li v-for="(item, index) in name.rules" :key="index" v-html="item.rule"></li>
      </ul>
    </article>
    <div class="warning">
      <p>
        <span class="caution">Caution</span>&nbsp;
        <strong>The Capitalizer</strong> is just some code trying its best to uppercase your titles according to the rules of your chosen style. Sometimes, though, it won&apos;t work just right. In particular,
        <strong>The Capitalizer</strong> might not recognize when a preposition should be capitalized when it&apos;s used adverbally, adjectivally, or to modify a verb. There may also be other cases in which it doesn&apos;t return the correct result. If you find an error, you can keep it to yourself,
        <a
          href="https://twitter.com/TCapitalizer"
        >tweet us</a> or
        <a href="https://github.com/royalfig/Bulk-Title-Capitalizer">contribute to the project</a>!
      </p>
    </div>
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
              rule:
                "Capitalize the first and last words in the title and in any subtitle"
            },
            {
              rule:
                "Capitalize <em>nouns</em>, <em>pronouns</em>, <em>verbs</em>, <em>adjectives</em>, <em>adverbs</em>, and <em>conjunctions</em> (but not &ldquo;and,&rdquo; &ldquo;but,&rdquo; &ldquo;for,&rdquo; &ldquo;or,&rdquo; &ldquo;nor&rdquo;)"
            },
            {
              rule:
                "Lowercase all prepositions unless they are used adverbially or adjectivally"
            },
            {
              rule:
                "Lowercase the articles (&ldquo;a,&rdquo; &ldquo;an,&rdquo; &ldquo;the&rdquo;)"
            },
            {
              rule:
                "Lowercase &ldquo;to&rdquo; as part of an infinite as in &ldquo;to run&rdquo;"
            },
            {
              rule: "Lowercase &ldquo;as&rdquo; in all instances"
            },
            {
              rule:
                "Lowercase the parts of proper names that would normally be lowercase, like &ldquo;von&rdquo; in Georg von Trapp or &ldquo;van&rdquo; in Vincent van Gogh"
            },
            {
              rule:
                "Lowercase the second part of a species name, as in &ldquo;<em>Homo sapiens</em>&rdquo;"
            },
            {
              rule:
                "For hyphenated compounds, always capitalize the first word. Capitalize subsequent words unless they are articles, prepositions, or coordinating conjunctions, or a musical symbol (like &ldquo;sharp&rdquo; in F-sharp). If the first word is a prefix that could not stand on its own, then lowercase the following word (for example, &ldquo;Anti-theft&rdquo;). Capitalize all words in hyphenated numbers or fractions"
            }
          ]
        },
        {
          id: "AP",
          badge: "Journalistic",
          style: "Associated Press (AP)",
          rules: [
            {
              rule:
                "Capitalize the first and last words in the title and in any subtitle"
            },
            {
              rule: "Capitalize all words with four or more letters"
            },
            {
              rule:
                "Capitalize all major words in the title, including those after a hyphen. Major words include <em>nouns</em>, <em>verbs</em>, <em>adjectives</em>, <em>adverbs</em>, and <em>pronouns</em>"
            },

            {
              rule:
                "Lowercase everything else, which includes <em>coordinating conjunctions</em>, <em>articles</em>, and <em>prepositions</em> (when fewer than four letters)"
            }
          ]
        },
        {
          id: "APA",
          badge: "Academic",
          style: "American Psychological Association (APA)",
          rules: [
            {
              rule:
                "Capitalize the first and last words in the title and in any subtitle"
            },
            {
              rule: "Capitalize all words of four letters or more"
            },
            {
              rule:
                "Capitalize major words, including <em>verbs</em>, <em>nouns</em>, <em>adjectives</em>, <em>adverbs</em>, and <em>pronouns</em>"
            },

            {
              rule: "Capitalize each word in a hyphenated compound"
            },
            {
              rule:
                "Lowercase <em>coordinating conjunctions</em>, <em>articles</em>, and <em>prepositions</em> (when fewer than four letters)"
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
                "Capitalize the first and last words in the title and in any subtitle"
            },
            { rule: "Capitalize all words with four or more letters" },
            {
              rule:
                "Capitalize <em>nouns</em>, <em>pronouns</em>, and <em>verbs</em>"
            },

            {
              rule:
                "Capitalize &ldquo;no,&rdquo; &ldquo;nor,&rdquo; &ldquo;not,&rdquo; &ldquo;off,&rdquo; &ldquo;out,&rdquo; &ldquo;so,&rdquo; &ldquo;up&rdquo;"
            },
            {
              rule:
                "Capitalize prepositions with fewer than four letters when they are used adverbally, adjectivally, or to modify a verb"
            },
            {
              rule:
                "Capitalize &ldquo;for&rdquo; when it takes the place of a verb to mean support or advocate"
            },
            {
              rule:
                "Lowercase &ldquo;a,&rdquo; &ldquo;and,&rdquo; &ldquo;as,&rdquo; &ldquo;at,&rdquo; &ldquo;but,&rdquo; &ldquo;by,&rdquo; &ldquo;en,&rdquo; &ldquo;for,&rdquo; &ldquo;if,&rdquo; &ldquo;in,&rdquo; &ldquo;of,&rdquo; &ldquo;on,&rdquo; &ldquo;or,&rdquo; &ldquo;the,&rdquo; &ldquo;to,&rdquo; &ldquo;v.,&rdquo; &ldquo;vs.,&rdquo; &ldquo;via&rdquo;"
            },
            { rule: "Lowercase the &ldquo;to&rdquo; in infinitives" },
            {
              rule:
                "Capitalize hyphenated compounds unless the compound is formed from a prefix of two or three letters that is used to separate doubled vowels. If a prefix has four letters or more, capitalize both words in the compound"
            }
          ]
        },
        {
          id: "MLA",
          badge: "Academic",
          style: "Modern Language Association (MLA)",
          rules: [
            {
              rule:
                "Capitalize the first and last words in the title and in any subtitle"
            },
            {
              rule:
                "Capitalize <em>nouns</em>, <em>pronouns</em>, <em>verbs</em>, <em>adjectives</em>, <em>adverbs</em>, and <em>subordinating conjunctions</em>"
            },
            {
              rule:
                "Lowercase <em>articles</em>, <em>prepositions</em>, <em>coordinating</em> conjunctions, and the &ldquo;to&rdquo; in infinitives"
            },
            {
              rule: "Capitalize all words in a hyphenated compound"
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
                "Capitalize <em>adjectives</em>, <em>adverbs</em>, <em>nouns</em>, <em>subordinating conjunctions</em>, and <em>verbs</em>"
            },
            {
              rule: "Capitalize <em>prepositions</em> of five letters or more"
            },
            {
              rule:
                "Capitalize prepositions when used in phrasal verbs or compound prepositions"
            },
            {
              rule: "Lowercase articles (<em>a</em>, <em>an</em>, <em>the</em>)"
            },
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
.explainer-container {
  margin-top: 6rem;
}

.style-rules {
  margin: 0.15em auto;
  font-weight: 900;
  line-height: 1.2;
  color: #333333;
  text-align: center;
}

.style {
  display: inline;
  line-height: 1.2;
  color: cap-dark-gray;
}

.explainer {
  margin: 2em auto;
}

.badge, .caution {
  display: inline;
  padding: 2px 5px;
  font-weight: 700;
  font-size: 75%;
  text-transform: uppercase;
  color: #fff;
  background-color: cap-dark-gray;
  border-radius: 5px;
  margin-left: 5px;
  font-weight: 700;
  vertical-align: text-top;
}

.caution {
  background: cap-yellow;
  color: cap-darker-gray;
  vertical-align: initial;
  margin-left: 0;
}

.rule-container {
  margin-left: 1em;
  border-left: 1px solid cap-red;
}

.warning a, .warning a:visited {
  color: currentColor;
}
</style>

