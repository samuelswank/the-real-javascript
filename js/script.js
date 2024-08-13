let $editor = $('#editor');

mappingHanacaraka = {
    // Shift not held
    // Hanacaraka, Sandhangan Swara Pendek, and some 
    '1' : String.fromCharCode(0xa9d1), '2' : String.fromCharCode(0xa9d2), '3' : String.fromCharCode(0xa9d3),
    '4' : String.fromCharCode(0xa9d4), '5' : String.fromCharCode(0xa9d5), '6' : String.fromCharCode(0xa9d6),
    '7' : String.fromCharCode(0xa9d7), '8' : String.fromCharCode(0xa9d8), '9' : String.fromCharCode(0xa9d9),
    '0' : String.fromCharCode(0xa9d0),
    // Keyboard Row 1
    'q' : String.fromCharCode(0xa9b2), 'w' : String.fromCharCode(0xa9a4), 'e' : String.fromCharCode(0xa995),
    'r' : String.fromCharCode(0xa9ab), 't' : String.fromCharCode(0xa98f), 'y' : String.fromCharCode(0xa9a2),
    'u' : String.fromCharCode(0xa9a0), 'i' : String.fromCharCode(0xa9b1), 'o' : String.fromCharCode(0xa9ae),
    'p' : String.fromCharCode(0xa9ad),
    // Keyboard Row 2
    'a' : String.fromCharCode(0xa9a5), 's' : String.fromCharCode(0xa99d), 'd' : String.fromCharCode(0xa997),
    'f' : String.fromCharCode(0xa9aa), 'g' : String.fromCharCode(0xa99a), 'h' : String.fromCharCode(0xa9a9),
    'j' : String.fromCharCode(0xa992), 'k' : String.fromCharCode(0xa9a7), 'l' : String.fromCharCode(0xa99b),
    ';' : String.fromCharCode(0xa994),
    // Keyboard Row 3
    'z' : String.fromCharCode(0xa9b6), 'x' : String.fromCharCode(0xa9b8), 'c' : String.fromCharCode(0xa9bc),
    // b may go
    'v' : String.fromCharCode(0xa9ba), 'b' : String.fromCharCode(0xa9ba, 0xa9b4), 'n' : String.fromCharCode(0xa989),
    'm' : String.fromCharCode(0xa98a), ',' : String.fromCharCode(0xa981), '.' : String.fromCharCode(0xa982),
    // '/' : String.fromCharCode(0xa983),

    // Shift held
    // Murda and Mahaprana
    // Keyboard Row 1
    'Q' : String.fromCharCode(0xa983), 'W' : String.fromCharCode(0xa99f), 'E' : String.fromCharCode(0xa996),
    'R' : String.fromCharCode(0xa9ac), 'T' : String.fromCharCode(0xa991), 'Y' : String.fromCharCode(0xa9a3), 
    'U' : String.fromCharCode(0xa9a1), 'I' : String.fromCharCode(0xa9af), 'O' : String.fromCharCode(0xa9b0),
    // Keyboard Row 2
    'A' : String.fromCharCode(0xa9a6), 'S' : String.fromCharCode(0xa99e), 'D' : String.fromCharCode(0xa999),
    'G' : String.fromCharCode(0xa99a), 'J' : String.fromCharCode(0xa993), 'K' : String.fromCharCode(0xa99c),

    // Punctuation
    '@' : String.fromCharCode(0xa9cf), '#' : String.fromCharCode(0xa9c3), '$' : String.fromCharCode(0xa9c4), 
    // & may go
    '%' : String.fromCharCode(0xa9c5), '&' : String.fromCharCode(0xa9cb), '*' : String.fromCharCode(0xa9de), 
    '-' : String.fromCharCode(0xa9df), '(' : String.fromCharCode(0xa9cc), ')' : String.fromCharCode(0xa9cd),
    // Below may change to {}
    '[' : String.fromCharCode(0xa9c1), ']' : String.fromCharCode(0xa9c2), ':': String.fromCharCode(0xa9c7),
    '"' : String.fromCharCode(0xa9ca), '<' : String.fromCharCode(0xa9c8), '>' : String.fromCharCode(0xa9c9)
};

let modifierKeyPress = {}

$editor.on('keydown', e => {
    let textToInsert = mappingHanacaraka[e.key];

    if (typeof textToInsert !== 'undefined') {
        e.preventDefault();
        let $editorVal = $editor.val();
        let curPos = $editor[0].selectionStart;     
        $editor.val($editorVal.slice(0, curPos) + textToInsert + $editorVal.slice(curPos));
    }
});

let $keys = $('.key');

$keys.on('click', e => {
    // console.log($(e.target).text());
    let textToInsert = $(e.target).text();

    let $editorVal = $editor.val();
    let curPos = $editor[0].selectionStart;     
    $editor.val($editorVal.slice(0, curPos) + textToInsert + $editorVal.slice(curPos));
});
