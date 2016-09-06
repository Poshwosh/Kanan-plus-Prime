// Disables barehand weapon warning messages when attempting to attack with tools. (Blade3575)

var pattern = scan('E8 E7 05 E1 FE 84 C0 ?? ?? 8C 03 00 00 68 90 EA 9E 02 8D 4D');
patch(pattern.add(7), [0x90,0xE9]);
