// Adds commas in gold strings, effectively digit grouping them. (5000000 > 5,000,000)

var pattern = scan('CC CC CC CC 55 8B EC 6A FF 68 F1 85');
patch(pattern.add(4), [0xE9, 0x3B, 0x40, 0x7B, 0x61]);