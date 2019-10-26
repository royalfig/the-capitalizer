<template>
  <aside class="container explainer-container">
    <h2 class="style-rules">Style Rules</h2>
    <article class="explainer" v-for="style in sortedStyles" :key="style.id">
      <h2>{{style.style}}</h2>
      <ul>
        <li v-for="rule in style.rules" :key="rule" v-html="rule"></li>
      </ul>
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
          style: "Chicago Manual of Style (CMS)",
          rules: [
            "Capitalize the first and last word",
            "Capitalize nouns, pronouns, verbs, adjectives, and conjunctions (but not the coordinating conjunctions <em>and</em>, <em>but</em>, <em>for</em>, or, and <em>nor</em>)",
            "Lowercase all prepositions unless they are used adverbially or adjectivally or when they are part of a Latin expression",
            "Lowercase articles (<em>the</em>, <em>a</em>, and <em>an</em>)",
            "Lowercase &ldquo;to&rdquo; as a preposition (see no. 3), but also lowercase it as part of an infinite as in &ldquo;to run&rdquo;",
            "Lowercase the parts of proper names that would normally be lowercase, like the &ldquo;von&rdquo; in Wolfgang von Mozart or the &ldquo;von&rdquo; in Wolfgang von Goethe",
            "Lowercase the second part of a species name, as in <em>Homo sapiens</em>",
            "Hyphens: it&apos;s a whole thing"
          ]
        },
        {
          id: "AP",
          style: "Associated Press (AP)",
          rules: []
        },
        {
          id: "APA",
          style: "American Psychological Association (APA)",
          rule: []
        },
        {
          id: "NYT",
          style: "New York Times (NYT)",
          rule: []
        },
        {
          id: "MLA",
          style: "American Psychological Association (APA)",
          rule: []
        },
        {
          id: "WP",
          style: "Wikipedia (WP)",
          rule: []
        }
      ]
    };
  },
  computed: {
    sortedStyles() {
      return this.styles.sort((a, b) => {
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
</style>