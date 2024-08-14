let $editor = $('#editor');

mappingTextArea = {
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
    ';' : String.fromCharCode(0xa994), '\'' : String.fromCharCode(0xa9c0),
    // Keyboard Row 3
    'z' : String.fromCharCode(0xa9b6), 'x' : String.fromCharCode(0xa9b8), 'c' : String.fromCharCode(0xa9bc),
    'v' : String.fromCharCode(0xa9ba), 'b' : String.fromCharCode(0xa9b4), 'n' : String.fromCharCode(0xa989),
    'm' : String.fromCharCode(0xa98a), ',' : String.fromCharCode(0xa981), '.' : String.fromCharCode(0xa982),
    '/' : String.fromCharCode(0xa983),

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

let keys = {};

$editor.on('keydown', e => {
    keys[e.code] = true;

    console.log('#' + e.code);
    let $key = $('#' + e.code);
    console.log($key);
    $key.addClass('hover');

    let textToInsert = mappingTextArea[e.key];
    if (typeof textToInsert !== 'undefined') {
        e.preventDefault();



        let $editorVal = $editor.val();
        let curPos = $editor[0].selectionStart;
            
        $editor.val($editorVal.slice(0, curPos) + textToInsert + $editorVal.slice(curPos));
        $editor.focusOnPos(curPos + 1);
    }
});

$editor.on('keyup', e => {
    console.log('#' + e.code);
    let $key = $('#' + e.code);
    console.log($key);
    $key.removeClass('hover');

    delete keys[e.code];
});

let $textKeys = $('.text');

mappingKeyboard = {
    // Row 1
    Escape: { base: 'esc' },
    // Row 2
    Backquote: { base: '`' },
    Digit1: { base: String.fromCharCode(0xa9d1) },
    Digit2: { base: String.fromCharCode(0xa9d2) },
    Digit3: { base: String.fromCharCode(0xa9d3) },
    Digit4: { base: String.fromCharCode(0xa9d4) },
    Digit5: { base: String.fromCharCode(0xa9d5) },
    Digit6: { base: String.fromCharCode(0xa9d6) },
    Digit7: { base: String.fromCharCode(0xa9d7) },
    Digit8: { base: String.fromCharCode(0xa9d8) },
    Digit9: { base: String.fromCharCode(0xa9d9) },
    Digit0: { base: String.fromCharCode(0xa9d0) },
    Minus: { base: String.fromCharCode(0xa9df) },
    Equal: { base: '=' },
    Backspace: { base: '⌫' },
    // Row 3
    Tab: { base: '↹' },
    KeyQ: { base: String.fromCharCode(0xa9b2) },
    KeyW: { base: String.fromCharCode(0xa9a4) },
    KeyE: { base: String.fromCharCode(0xa995) },
    KeyR: { base: String.fromCharCode(0xa9ab) },
    KeyT: { base: String.fromCharCode(0xa98f) },
    KeyY: { base: String.fromCharCode(0xa9a2) },
    KeyU: { base: String.fromCharCode(0xa9a0) },
    KeyI: { base: String.fromCharCode(0xa9b1) },
    KeyO: { base: String.fromCharCode(0xa9ae) },
    KeyP: { base: String.fromCharCode(0xa9ad) },
    BracketLeft: { base: String.fromCharCode(0xa9c1) },
    BracketRight: { base: String.fromCharCode(0xa9c2) },
    Backslash: { base: '\\' },
    // Row 4
    CapsLock: { base: '⇪' },
    KeyA: { base: String.fromCharCode(0xa9a5) },
    KeyS: { base: String.fromCharCode(0xa99d) },
    KeyD: { base: String.fromCharCode(0xa997) },
    KeyF: { base: String.fromCharCode(0xa9aa) },
    KeyG: { base: String.fromCharCode(0xa99a) },
    KeyH: { base: String.fromCharCode(0xa9a9) },
    KeyJ: { base: String.fromCharCode(0xa992) },
    KeyK: { base: String.fromCharCode(0xa9a7) },
    KeyL: { base: String.fromCharCode(0xa99b) },
    Semicolon: { base: String.fromCharCode(0xa994) },
    Quote: { base: String.fromCharCode(0xa9c0) },
    Enter: { base: '↵' },
    // Row 5
    ShiftLeft: { base: '⇧' },
    KeyZ : { base:  String.fromCharCode(0xa9b6) },
    KeyX : { base:  String.fromCharCode(0xa9b8) },
    KeyC : { base:  String.fromCharCode(0xa9bc) },
    KeyV : { base:  String.fromCharCode(0xa9ba) },
    KeyB : { base:  String.fromCharCode(0xa9b4) },
    KeyN : { base:  String.fromCharCode(0xa989) },
    KeyM : { base:  String.fromCharCode(0xa98a) },
    Comma: { base: String.fromCharCode(0xa981) },
    Period: { base: String.fromCharCode(0xa982) },
    Slash: { base: String.fromCharCode(0xa983) },
    ShiftRight: { base: '⇧' },
    // Row 6
    ControlLeft: { base: '^' },
    AltLeft: { base: '⌥' },
    MetaLeft: { base: '⌘' },
    Space: { base: ' ' },
    MetaRight: { base: '⌘' },
    AltRight: { base: '⌥' },
}

$(window).on('load', e => {
    for (let i = 1; i < 7; ++i) {
        generateKeys('.row-' + i);
    }
});

function generateKeys(row) {
    $row = $(row).children();
    $row.each((i, el) => {
        $el = $(el);
        let id = $el.attr('id')
        if (Object.keys(mappingKeyboard).includes(id))
            $el.html(mappingKeyboard[id].base);
    });
}

$textKeys.on('click', e => {
    let textToInsert = $(e.target).text();

    let $editorVal = $editor.val();
    let curPos = $editor[0].selectionStart;     
    $editor.val($editorVal.slice(0, curPos) + textToInsert + $editorVal.slice(curPos));
    
    $editor.focusOnPos(curPos + 1);
});

$backspace = $('.backspace');

$backspace.on('click', e => {
    let curPos = $editor[0].selectionStart;
    
    if (curPos === 0)
        return;
    
    let $editorVal = $editor.val();   
    $editor.val($editorVal.slice(0, curPos - 1) + $editorVal.slice(curPos));

    $editor.focusOnPos(curPos + 1);
});

$enter = $('.enter');
$enter.on('click', e => {
    let $editorVal = $editor.val();
    let curPos = $editor[0].selectionStart;     
    $editor.val($editorVal.slice(0, curPos) + '\n' + $editorVal.slice(curPos));
    
    $editor.focusOnPos(curPos + 1);
});