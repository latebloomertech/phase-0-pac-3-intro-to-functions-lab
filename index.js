function shout(string) {
    return string.toUpperCase();
}
//console.log(shout("hello"));
function whisper(string) {
    return string.toLowerCase();
}
//console.log(whisper("HELLO"));

function logShout(string) {
    console.log(string.toUpperCase());
}
//console.log(logShout("hello"));

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    //console.log(string);
    //console.log(shout(string));
    //console.log(whisper(string));
    if (string === string.toLowerCase())
        return "I can't hear you!";
    else if (string === string.toUpperCase())
        return "YES INDEED!";
    else if (string === "I love you, Grandma.")
        return "I love you, too.";
}