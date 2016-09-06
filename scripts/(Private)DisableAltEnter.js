// Disables the ALT + Enter shortcut which enables full-screen mode. (Blade3575)

var pattern = scan('32 04 00 00 ?? ?? ?? ?? ?? 00 74');
patch(pattern.add(4), [0x90, 0x90, 0x90, 0x90, 0x90, 0x90]);
