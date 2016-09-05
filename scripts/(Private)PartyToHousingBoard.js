// Instead of party board functioning as intended, it will open up the housing board instead. (Blade3575)

// Reference:
// CC CC CC CC CC CC CC CC CC CC 50 8B 44 24 04 89 44 24 08 58 83 C4 04 E9 8E FE 4F FF 90 90 53 56 57 A1 28 10 0A 03 33 C5 50 8D 45 F4 64 A3 00 00 00 00 8B F1 89 75 E0 8B 0D D0 2B 0B 03 68 67 04 00 00 E8 D3 75 58
// CC CC CC CC CC CC CC CC CC CC 55 8B EC 6A FF 68 C7 6A 7A 02 64 A1 00 00 00 00 50 83 EC 20 53 56 57 A1 28 10 0A 03 33 C5 50 8D 45 F4 64 A3 00 00 00 00 8B F1 89 75 E0 8B 0D D0 2B 0B 03 68 67 04 00 00 E8 D3 75 58
// Note: Uncomment the line with the skill replacement you wish to use to toggle.

var pattern = scan('CC CC CC CC CC CC CC CC CC CC ?? 8B ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? 53 56 57 A1 28 10 0A 03 33 C5 50 8D 45 F4 64 A3 00 00 00 00 8B F1 89 75 E0 8B 0D D0 2B 0B 03 68');
patch(pattern.add(10), [0x50, 0x8B, 0x44, 0x24, 0x04, 0x89, 0x44, 0x24, 0x08, 0x58, 0x83, 0xC4, 0x04, 0xE9, 0x8E, 0xFE, 0x4F, 0xFF, 0x90, 0x90]);