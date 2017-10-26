var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false

function shout(string) {
  console.log(string.toUpperCase)
}

function whisper(string) {
  console.log(string.toLowerCase)
}

function sayHiToGrandma(string) {
  if (string === lowercase) {
    return "I can\'t hear you!"
  }
      if (string.toUpperCase() === uppercase) {
        return "YES INDEED!"
      }
          if (string === "I love you, Grandma.") {
    return "I love you, too."
    }
}
