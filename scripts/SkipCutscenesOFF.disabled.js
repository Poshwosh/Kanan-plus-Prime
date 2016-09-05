// Disables SkipCutscenesON.js, allowing cutscenes to be played again without having to restart the client. (Created by Step29, converted from mod_sharker by C0ZIEST, fixed by Poshwosh)

var pattern = scan('?? ?? ?? EB 05 39 ?? ?? ?? ?? ?? ?? E0');

patch(pattern.add(3), 0x75);
