let message = "hello my friend";

console.log(vowelCounter(message));

function vowelCounter(word){
    return word.match(/[aeiou]/gi).length;
}