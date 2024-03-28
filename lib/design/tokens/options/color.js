import { hslToHex, cyclicValue } from "../utils";

const SIZE = 12;
const HUE_OFFSET = -10;
const TONES_AMOUNT = 9;
const BRIGHTER_SHIFT = -100; // Shift towards red (decrease hue)
const DARKER_SHIFT = 10; // Shift towards violet (increase hue)
0;

const names =
  "red orange yellow lime green teal cyan azure blue purple magenta pink".split(
    " ",
  );

const colors = {};

// hues

for (let i = 0; i < SIZE; i++) {
  const hue = cyclicValue(
    HUE_OFFSET + i * Math.floor(360 / SIZE),
    0,
    360,
  );
  const hueName = names[i] || i.toString();

  colors[hueName] = {};

  for (let j = 1; j <= TONES_AMOUNT; j++) {
    const lightness = Math.floor(j * (100 / (TONES_AMOUNT + 1)));

    let hueShift;

    if (lightness <= 50) {
      hueShift = (DARKER_SHIFT * (50 - lightness)) / 50;
    } else {
      hueShift = (BRIGHTER_SHIFT * (lightness - 50)) / 50;
    }

    const newHue = cyclicValue(hue + hueShift, 0, 360);
    colors[hueName][j] = hslToHex(newHue, 100, lightness);
  }
}

// grays

colors.black = '#000000'
colors.white = '#ffffff'

colors.gray = {
  "0": colors.black,
  "10": colors.white,
  cool: {
    "0": colors.black,
    "10": colors.white,
  },
  warm: {
    "0": colors.black,
    "10": colors.white,
  },
}

for (let i = 1; i <= TONES_AMOUNT; i++) {
  const lightness = Math.floor(i * (100 / (TONES_AMOUNT + 1)))

  colors.gray[i] = hslToHex(0, 0, lightness);

  const orangeNameIndex = 0;
  const azureNameIndex = 7;

  const reddishTone = Math.floor(cyclicValue(HUE_OFFSET, 0, 360) / (TONES_AMOUNT + 1) * orangeNameIndex)
  const blueishTone = Math.floor(cyclicValue(HUE_OFFSET, 0, 360) / (TONES_AMOUNT + 1) * azureNameIndex)

  colors.gray.cool[i] = hslToHex(blueishTone, 10, lightness);
  colors.gray.warm[i] = hslToHex(reddishTone, 10, lightness);
}

console.log(colors)

export default colors;
