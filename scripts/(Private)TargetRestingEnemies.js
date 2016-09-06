// Allows you to target enemies that are in resting position such as mimics, books and golems. (Blade3575)

var pattern = scan('18 8B 75 08 3B F3 0F 84 E0 02 00');
patch(pattern.add(6), [0x90, 0xE9]);
