// Automatically skip any sort of cutscene. (Blade3575)
// Rename SkipCutscenes.js > SkipCutscenes.disabled.js then rerun kanan to disable.

var pattern1 = scan('00 33 DB 89 5D F0 8B 49 18 3B CB 74 19 8B 45 0C 8B 75 08 50 56 E8 52 FB FF FF 89 5D FC C7 45 F0 01 00 00 00');
patch(pattern1.add(11), 0xEB);
var pattern2 = scan('00 33 DB 89 5D F0 8B 49 18 3B CB 74 19 8B 45 0C 8B 75 08 50 56 E8 52 FB FF FF 89 5D FC C7 45 F0 01 00 00 00');
patch(pattern2.add(11), 0xEB);
