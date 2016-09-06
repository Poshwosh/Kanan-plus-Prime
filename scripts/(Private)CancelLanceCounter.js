// Allows Lance Counter to be cancelled where else it shouldn't. (Blade3575)

var pattern = scan('00 83 D0 00 3B C6 ?? 06 72 47 3B');
patch(pattern.add(6), 0xEB);
