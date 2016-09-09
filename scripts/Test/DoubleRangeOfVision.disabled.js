// Stops all objects from loading. (Poshwosh)

var range = scan('00 C8 42 00 ?? ?? ?? 00 00 34 42 00 00 D2 44');
patch(range.add(4), [0x50, 0x43, 0x47]);
var write = scan('D9 56 40 D9 C0 DE E2 DE F1 D9 5E 5C D9 45 10 D9 56 44');
patch(write.add(2), [0x20]);
