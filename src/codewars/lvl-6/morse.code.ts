// https://www.codewars.com/kata/54b724efac3d5402db00065e/typescript

const MORSE_CODE: Record<string, string> = {}; // Mock morse dictionary

export function decodeMorse(morseCode: string): string {
  const words = morseCode.trim().split("   ");

  const message = words.reduce<string>((acc, morseWord) => {
    const word = morseWord
      .split(" ")
      .map((word) => MORSE_CODE[word])
      .join("");

    acc += word + " ";
    return acc;
  }, "");
  return message.trim();
}

decodeMorse(".... . -.--   .--- ..- -.. .");
