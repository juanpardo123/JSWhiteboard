let message = "hello my friend";

console.log(vowelCounter(message));

function vowelCounter(word){
    return message.match(/[aeiou]/gi).length;
}