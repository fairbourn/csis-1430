function myFuction() {
  var noun = prompt("Please enter a noun (e.g. Place, Setting):")
  var noun2 = prompt("Please enter a noun (e.g. Person, Man, Thing):")
  var pronoun = prompt("Please enter a pronoun (e.g. He, They, Them):")
  var pronoun2 = prompt("Please enter a pronoun (e.g. She, They, Them):")
  var verb = prompt("Please enter a verb (e.g. Fight, Run, Jump, Skip):")
  var verb2 = prompt("Please enter a verb (e.g. Die, break, fall, win):")
  var adjective = prompt("Please enter a adjective (e.g. Beautiful, Dark, Creepy, Loud):")
  var adjective2 = prompt("Please enter a adjective (e.g. Beautiful, Ugly, Tiny, Fat, Strong):")
  var adverb = prompt("Please enter a adverb (e.g. Safe, Dangerous, Daring):")
  var adverb2 = prompt("Please enter a adverb (e.g. Safe, Dangerous, Daring):")
  var preposition = prompt("Please enter a preposition (e.g. Until, Before,):")
  var preposition2 = prompt("Please enter a preposition (e.g. For, With, Now):")
  var conjunction = prompt("Please enter a conjunction (e.g. And, But, Or):")
  var conjunction2 = prompt("Please enter a conjunction (e.g. And, But, Or):")
  var interjection = prompt("Please enter a interjection (e.g. Oh, Wow, Oops):")
  var interjection2 = prompt("Please enter a interjection (e.g. Oh, Wow, Oops):")

alert("In a " + adjective + " " + noun + " there is a " + adjective2 + " " + noun2 + ". " + pronoun + " likes to " + verb + ". this is a " + adverb + " sport. The sport is so " + adverb2 +" many people " + verb2 + ". There is a women who also likes to " + verb + ". " + pronoun2 + " was good " + preposition + " " + pronoun2 + " disappeared. " + preposition2 + " people going missing means, not many people want to " + verb + " anymore. " + conjunction + " now the sport is making a comeback! " + interjection + "! Is what many people are saying about the news! is this good? maybe " + conjunction2 + " more people could die? " + interjection2 + " is what participants say about the subject when asked")

document.getElementById("madlibs").innerHTML = txt;
}
