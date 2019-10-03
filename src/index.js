const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let result = "";
  for (let i = 0; i < expr.length; i += 10) {
    if (expr[i] === "*") {
      result += " ";
      continue;
    }
    let word = "";
    for (let j = i; j < i + 10; j += 2) {
      let symbol = expr.slice(j, j + 2);
      if (symbol === "00") {
        word += "";
      } else if (symbol === "10") {
        word += ".";
      } else if (symbol === "11") {
        word += "-";
      }
    }
    result += MORSE_TABLE[word];
  }

  return result;
}

module.exports = {
  decode
};
