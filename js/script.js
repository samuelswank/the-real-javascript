let $editor = $('#editor');
let keys = {};
let $textKeys = $('.text');
let $backspace = $('.backspace');
let $tab = $('.tab');
let $capsLock = $('.capslock');
let state = 'base';
let $enter = $('.enter');
let $shift = $('.shift');

mapping = {
    // Row 1
    Escape: { row: 1, base: 'esc' },
    // Row 2
    Backquote: { row: 2, base: String.fromCharCode(0xa9b3), shift: '~', text: true },
    Digit1: { row: 2, base: String.fromCharCode(0xa9d1), shift: '!', text: true },
    Digit2: { row: 2, base: String.fromCharCode(0xa9d2), shift: String.fromCharCode(0xa9cf), text: true },
    Digit3: { row: 2, base: String.fromCharCode(0xa9d3), shift: String.fromCharCode(0xa9c3), text: true },
    Digit4: { row: 2, base: String.fromCharCode(0xa9d4), shift: String.fromCharCode(0xa9c4), text: true },
    Digit5: { row: 2, base: String.fromCharCode(0xa9d5), shift: String.fromCharCode(0xa9c5), text: true },
    Digit6: { row: 2, base: String.fromCharCode(0xa9d6), shift: String.fromCharCode(0x2038), text: true },
    Digit7: { row: 2, base: String.fromCharCode(0xa9d7), shift: String.fromCharCode(0xa9cb), text: true },
    Digit8: { row: 2, base: String.fromCharCode(0xa9d8), shift: String.fromCharCode(0xa9de), text: true },
    Digit9: { row: 2, base: String.fromCharCode(0xa9d9), shift: String.fromCharCode(0xa9cc), text: true },
    Digit0: { row: 2, base: String.fromCharCode(0xa9d0), shift: String.fromCharCode(0xa9cd), text: true },
    Minus: { row: 2, base: String.fromCharCode(0xa9df), shift: '_', text: true },
    Equal: { row: 2, base: String.fromCharCode(0xa9c8), shift: String.fromCharCode(0xa9c9), text: true },
    Backspace: { row: 2, base: '⌫', text: false },
    // Row 3
    Tab: { row: 3, base: '↹', text: false },
    KeyQ: { row: 3, base: String.fromCharCode(0xa9b2), shift: String.fromCharCode(0xa984), text: true },
    KeyW: { row: 3, base: String.fromCharCode(0xa9a4), shift: String.fromCharCode(0xa99f), text: true },
    KeyE: { row: 3, base: String.fromCharCode(0xa995), shift: String.fromCharCode(0xa996), text: true },
    KeyR: { row: 3, base: String.fromCharCode(0xa9ab), shift: String.fromCharCode(0xa9ac), text: true },
    KeyT: { row: 3, base: String.fromCharCode(0xa98f), shift: String.fromCharCode(0xa991), text: true },
    KeyY: { row: 3, base: String.fromCharCode(0xa9a2), shift: String.fromCharCode(0xa9a3), text: true },
    KeyU: { row: 3, base: String.fromCharCode(0xa9a0), shift: String.fromCharCode(0xa9a1), text: true },
    KeyI: { row: 3, base: String.fromCharCode(0xa9b1), shift: String.fromCharCode(0xa9af), text: true },
    KeyO: { row: 3, base: String.fromCharCode(0xa9ae), shift: String.fromCharCode(0xa9b0), text: true },
    KeyP: { row: 3, base: String.fromCharCode(0xa9ad), shift: String.fromCharCode(0xa985), text: true },
    BracketLeft: { row: 3, base: String.fromCharCode(0xa9c1), shift: '{', text: true },
    BracketRight: { row: 3, base: String.fromCharCode(0xa9c2), shift: '}', text: true },
    Backslash: { row: 3, base: String.fromCharCode(0xa9ca), shift: '|', text: true },
    // Row 4
    CapsLock: { base: '⇪', text: false },
    KeyA: { row: 4, base: String.fromCharCode(0xa9a5), shift: String.fromCharCode(0xa9a6), text: true },
    KeyS: { row: 4, base: String.fromCharCode(0xa99d), shift: String.fromCharCode(0xa99e), text: true },
    KeyD: { row: 4, base: String.fromCharCode(0xa997), shift: String.fromCharCode(0xa999), text: true },
    KeyF: { row: 4, base: String.fromCharCode(0xa9aa), shift: String.fromCharCode(0xa986), text: true },
    KeyG: { row: 4, base: String.fromCharCode(0xa99a), shift: String.fromCharCode(0xa998), text: true },
    KeyH: { row: 4, base: String.fromCharCode(0xa9a9), shift: String.fromCharCode(0xa987), text: true },
    KeyJ: { row: 4, base: String.fromCharCode(0xa992), shift: String.fromCharCode(0xa993), text: true },
    KeyK: { row: 4, base: String.fromCharCode(0xa9a7), shift: String.fromCharCode(0xa99c), text: true },
    KeyL: { row: 4, base: String.fromCharCode(0xa99b), shift: String.fromCharCode(0xa988), text: true },
    Semicolon: { row: 4, base: String.fromCharCode(0xa994), shift: String.fromCharCode(0xa9c7), text: true },
    Quote: { row: 4, base: String.fromCharCode(0xa9c0), shift: String.fromCharCode(0xa9be), text: true },
    Enter: { row: 4, base: '↵', text: false },
    // Row 5
    ShiftLeft: { base: '⇧' },
    KeyZ : { base:  String.fromCharCode(0xa9b6), shift: String.fromCharCode(0xa9b7), text: true },
    KeyX : { base:  String.fromCharCode(0xa9b8), shift: String.fromCharCode(0xa9b9), text: true },
    KeyC : { base:  String.fromCharCode(0xa9bc), shift: String.fromCharCode(0xa98c), text: true },
    KeyV : { base:  String.fromCharCode(0xa9ba), shift: String.fromCharCode(0xa9bb), text: true },
    KeyB : { base:  String.fromCharCode(0xa9b4), shift: String.fromCharCode(0xa9b5), text: true },
    KeyN : { base:  String.fromCharCode(0xa989), shift: String.fromCharCode(0xa98d), text: true },
    KeyM : { base:  String.fromCharCode(0xa98a), shift: String.fromCharCode(0xa98b), text: true },
    Comma: { base: String.fromCharCode(0xa981), shift: String.fromCharCode(0xa980), text: true },
    Period: { base: String.fromCharCode(0xa982), shift: String.fromCharCode(0xa9bd), text: true },
    Slash: { base: String.fromCharCode(0xa983), shift: String.fromCharCode(0xa9bf), text: true },
    ShiftRight: { base: '⇧', text: false },
    // Row 6
    ControlLeft: { base: '^', text: false },
    AltLeft: { base: '⌥', text: false },
    MetaLeft: { base: '⌘', text: false },
    Space: { base: ' ', text: true },
    MetaRight: { base: '⌘', text: false },
    AltRight: { base: '⌥', text: false },
};

$(window).on('load', () => {
    for (let i = 1; i < 7; ++i) {
        generateKeys('.row-' + i, state);
    }
});

$editor.on('keydown', e => {
    keys[e.code] = true;

    console.log(e.code);
    console.log(keys);

    let $key = $('#' + e.code);
    $key.addClass('hover');

    let textToInsert;

    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight')
        changeState();

    console.log(state);
    
    if (mapping[e.code].text)
        textToInsert = $key.html();

    console.log(state);

    if (e.key === 'Escape') {
        $editor.blur();
        delete keys[e.code];
        // Workaround, 'keyup' behavior was not working for 'Escape' key
        setTimeout(() => {
            $('#' + e.code).removeClass('hover');
        }, 125);
    } else if (e.key === 'Backspace') {
        return;
    } else if (e.key === 'Tab') {
        e.preventDefault();
        insertText('\t');
    } else if (e.key === 'CapsLock') {
        changeState();
    } else if (e.key === 'Enter') {
        insertText('\n');
    } else if (typeof textToInsert !== 'undefined') {
        e.preventDefault();
        insertText(textToInsert);
    }
});

$editor.on('keyup', e => {
    let $key = $('#' + e.code);
    $key.removeClass('hover');

    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight')
        changeState();

    delete keys[e.code];
});

$textKeys.on('click', e => {
    let textToInsert = $(e.target).text();
    insertText(textToInsert);

    if (typeof keys['ShiftLeft'] !== 'undefined' ||
        typeof keys['ShiftRight'] !== 'undefined') {

        delete keys['ShiftLeft'];
        delete keys['ShiftRight'];

        changeState();
    }


});

$backspace.on('click', () => {
    let curPos = $editor[0].selectionStart;
    
    if (curPos === 0)
        return;
    
    let $editorVal = $editor.val();   
    $editor.val($editorVal.slice(0, curPos - 1) + $editorVal.slice(curPos));

    $editor.focusOnPos(curPos + 1);
});

$tab.on('click', () => {
    insertText('\t');
});

$capsLock.on('click', () => {
    changeState();
});

$enter.on('click', () => {
    insertText('\n');
});

$shift.on('click', () => {
    keys['ShiftLeft'] = true;
    keys['ShiftRight'] = true;

    changeState();
});

// Helper Functions

function generateKeys(row, state) {
    $row = $(row).children();
    $row.each((i, el) => {
        $el = $(el);
        let id = $el.attr('id')
        if (Object.keys(mapping).includes(id)) {
            if (typeof mapping[id][state] !== 'undefined')
                $el.html(mapping[id][state]);
            else
                $el.html(mapping[id]['base']);
        }
    });
}

function changeState() {
    if (state === 'shift') {
        state = 'base'
        for (let i = 1; i < 7; ++i) {
            generateKeys('.row-' + i, 'base');
        }
    } else {
        state = 'shift';
        for (let i = 1; i < 7; ++i) {
            generateKeys('.row-' + i, 'shift');
        }
    }
}

function insertText(textToInsert) {
    let $editorVal = $editor.val();
    let curPos = $editor[0].selectionStart;
        
    $editor.val($editorVal.slice(0, curPos) + textToInsert + $editorVal.slice(curPos));
    $editor.focusOnPos(curPos + 1);
}