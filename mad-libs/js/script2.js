function myFunction() {
  var noun = prompt("Please enter a noun (e.g. Person, Man, Thing):")
  var noun2 = prompt("Please enter a noun (e.g. Person, Woman, Thing):")
  var pronoun = prompt("Please enter a pronoun (e.g. He, They, Them):")
  var pronoun2 = prompt("Please enter a pronoun (e.g. She, They, Them):")
  var verb = prompt("Please enter a verb (e.g. Embark, Run, Jump, Skip):")
  var verb2 = prompt("Please enter a verb (e.g.Embark, Run, Jump, Skip):")
  var adjective = prompt("Please enter a adjective (e.g. Beautiful, Ugly, Tiny, Fat):")
  var adjective2 = prompt("Please enter a adjective (e.g. Beautiful, Ugly, Tiny, Fat):")
  var adverb = prompt("Please enter a adverb (e.g. Safe, Dangerous, Daring):")
  var adverb2 = prompt("Please enter a adverb (e.g. Safe, Dangerous, Daring):")
  var preposition = prompt("Please enter a preposition (e.g. For, About, To):")
  var preposition2 = prompt("Please enter a preposition (e.g. For, About, To):")
  var conjunction = prompt("Please enter a conjunction (e.g. And, But, Or):")
  var conjunction2 = prompt("Please enter a conjunction (e.g. And, But, Or):")
  var interjection = prompt("Please enter a interjection (e.g. Oh, Wow, Oops):")
  var interjection2 = prompt("Please enter a interjection (e.g. Oh, Wow, Oops):")

alert("Once there was an " + adjective + " " + noun + ". " + pronoun + " was about to " + verb + " on a " + adverb + " Journey! The " +  noun + " recieved a letter " + preposition + " the " + noun2 + "! " + pronoun2 + " was in danger! "  + pronoun2 + " was the most " + adjective2 + " " + noun2 + " across the whole land. The journey was long " + conjunction + " " + adverb2 + ". " + interjection + " the " + noun + " said this path is filled " + preposition2 + " many foes! He fought them, " + conjunction2 + " they ran away! " + interjection2 + "! The foes said as they ran away! The " + noun + " must " + verb2 + " faster in order to save her!")

document.getElementById("madlibs").innerHTML = txt;
}
