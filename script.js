
// runs when button clicked
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function (e) {
    let output = document.getElementById("output");

    let adjectives = document.getElementById("adjectives").value.split(' ');
    let nouns = document.getElementById("nouns").value.split(' ');
    let verbs = document.getElementById("verbs").value.split(' ');
    let adverbs = document.getElementById("adverbs").value.split(' ');


    adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    noun = nouns[Math.floor(Math.random() * nouns.length)];
    verb = verbs[Math.floor(Math.random() * verbs.length)];
    adverb = adverbs[Math.floor(Math.random() * adverbs.length)];
    output.innerHTML = `The ${adjective} ${noun} ${verb} ${adverb}.`;
});