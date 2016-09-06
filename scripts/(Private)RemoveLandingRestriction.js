// Remove the minimum 15 height restriction when landing a flying mount. (Blade3575)

var pattern = scan('E0 F6 C4 41 0F 8A A2 00 00');
patch(pattern.add(4), [0x90, 0xE9]);
