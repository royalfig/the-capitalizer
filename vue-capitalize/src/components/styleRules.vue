<template>
  <aside class="container explainer-container">
    <h2>Style Rules</h2>
    <article class="explainer">
      <div id="ap" class="style-rules ap">
        <h3>Associated Press</h3>
        <ul>
          <li>Because length matters, uppercase words with three or more letters.</li>
          <li>
            Some parts of speech (nouns, pronouns, adjectives, verbs, adverbs, and subordinate conjunctions)
            are just better than others. Uppercase them.
          </li>
          <li>
            Other parts of speech (articles, coordinating conjunctions, and prepositions) are just lesser
            than. Lowercase them.
          </li>
          <li>
            Whenever "to" is part of something bigger than itself, i.e., an infinitive (like "to fart"),
            keep it lowercase.
          </li>
          <li>To break these rules is tantamount to pedophilia.</li>
        </ul>
      </div>
      <div id="apa" class="style-rules apa">
        <h3>American Psychological Association</h3>
        <ul>
          <li>
            The first word in a sentence, so smug, is capitalized, as is any of the family members, i.e.,
            subtitles.
          </li>
          <li>
            All words that have complained to the manager are uppercase (nouns, verbs, adjectives, and
            pronouns).
          </li>
          <li>
            Hyphens are like word swords, so capitalize the adjoining words because they're already
            suffering from being stabbed.
          </li>
          <li>
            Words of four letters or more can quickly become unruly. Elect a head by capitalizing the first
            letter.
          </li>
        </ul>
      </div>
      <div id="cms" class="style-rules cms">
        <h3>
          Chicago Manual of Style (17
          <sup>th</sup> edition)
        </h3>
        <ul>
          <li>
            Begging to be seen, the first word in a sentence must always be capitalized. Lest the last word
            feel worse about itself, capitalize it, too. To spare the feelings of the the more
            self-conscious words (like nouns, pronouns, verbs, adjectives, adverbs, and some
            conjunctions), uppercase them as well.
          </li>
          <li>
            Articles (the, a, an) are the proletariat of prose: they do all work, but recieve little reward.
            Keep them lowercase.
          </li>
          <li>
            Because length doesn't matter, lowercase prepositions, except when they being extra, acting
            adverbially or adjectivally, or they're acting hoity toity as part of a Latin expression used
            adjectivally or adverbially.
          </li>
          <li>
            Again, spite the commoners, and lowercase the common coordinating conjunctions (and, but, for,
            or, and nor).
          </li>
          <li>
            Here's something you need
            <em>to do</em>: lowercase "to" when it appears as part of an
            infinitive. "As" has done horrible things and should always be lowercase.
          </li>
          <li>Lowercase any part of a proper name that is usually lowercase, like "von" in von Trapp.</li>
          <li>
            Lowercase the second part of a species name, such as
            <em>pudica</em> in
            <em>Mimosa pudica</em>.
            No exceptions!
          </li>
        </ul>
      </div>
      <div id="mla" class="style-rules mla">
        <h3>Modern Language Association</h3>
        <ul>
          <li>The first word of a title is like the winner of a race. Crown it with capitalization.</li>
          <li>
            Uppercase the words society thinks are important (nouns, verbs, adverbs, and pronouns). Fuck
            those preposition pieces of shit.
          </li>
          <li>
            Don't forget to hyphenate your children. No, wait, that's vaccinate your children, and while
            you're at it, uppercase all major hyphenated words.
          </li>
          <li>Any words of forty letters or more, capitalize. JK. It's just four letters.</li>
        </ul>
      </div>

      <div id="nyt" class="style-rules nyt">
        <h3>New York Times</h3>
        <ul></ul>
      </div>

      <div id="wp" class="style-rules wp">
        <h3>Wikipedia</h3>
        <ul></ul>
      </div>
    </article>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.explainer-container {
  flex-flow: column;
  box-sizing: border-box;
  max-width: 1024px;
  margin: 0 auto;
}

.explainer {
  padding: 1em;
  width: 100%;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: center;
}

h2 {
  margin: 0;
  width: 100%;
  background: cap-blue;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #eee;
  font-size: 2.5em;
  text-align: center;
}

.style-rules {
  text-align: left;
  align-self: flex-start;
}
</style>