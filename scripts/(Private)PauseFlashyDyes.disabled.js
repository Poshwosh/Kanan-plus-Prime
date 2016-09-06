// Breaks the flashy dye tick, causing them to pause. (Step29)

var pattern = scan('84 C0 74 11 8B 4E 04 51 8B 0D E4 19 34 03 E8 E9 2D FE FF');
patch(pattern.add(2), [0xEB]);
