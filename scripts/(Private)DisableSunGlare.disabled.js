// Disable glare when looking at the sun. (Step29)

var pattern = scan('FF D0 84 C0 0F 84 BE 01 00 00 8B 4B 04 6A 00 68 3C D6 07');
patch(pattern.add(4), [0x90, 0xE9]);
