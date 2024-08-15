let $editor = $('#editor');
let keys = {};
let $keyboard = $('.keyboard');
let $textKeys = $('.text');
let $backspace = $('.backspace');
let $tab = $('.tab');
let $capsLock = $('.capslock');
let state = 'base';
let $enter = $('.enter');
let $shift = $('.shift');

mapping = {
    // Row 1
    Escape: { row: 1, base: 'esc', text: false, class: 'esc' },
    SelectAll: { row: 1, base: 'Select All', text: false, class: 'utility select-all'},
    Copy: { row: 1, base: 'Copy', text: false, class: 'utility copy'},
    Undo: { row: 1, base: 'Undo', text: false, class: 'utility undo'},
    Redo: { row: 1, base: 'Redo', text: false, class: 'utility redo'},
    ClearAll: { row: 1, base: 'Clear All', text: false, class: 'utility clear-all'},
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
    Backspace: { row: 2, base: '⌫', text: false, class: 'backspace' },
    // Row 3
    Tab: { row: 3, base: '↹', text: false, class: 'tab' },
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
    CapsLock: { row: 4, base: '⇪', text: false, class: 'capslock' },
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
    Enter: { row: 4, base: '↵', text: false, class: 'enter' },
    // Row 5
    ShiftLeft: { row: 5, base: '⇧', class: 'shift' },
    KeyZ : { row: 5, base:  String.fromCharCode(0xa9b6), shift: String.fromCharCode(0xa9b7), text: true },
    KeyX : { row: 5, base:  String.fromCharCode(0xa9b8), shift: String.fromCharCode(0xa9b9), text: true },
    KeyC : { row: 5, base:  String.fromCharCode(0xa9bc), shift: String.fromCharCode(0xa98c), text: true },
    KeyV : { row: 5, base:  String.fromCharCode(0xa9ba), shift: String.fromCharCode(0xa9bb), text: true },
    KeyB : { row: 5, base:  String.fromCharCode(0xa9b4), shift: String.fromCharCode(0xa9b5), text: true },
    KeyN : { row: 5, base:  String.fromCharCode(0xa989), shift: String.fromCharCode(0xa98d), text: true },
    KeyM : { row: 5, base:  String.fromCharCode(0xa98a), shift: String.fromCharCode(0xa98b), text: true },
    Comma: { row: 5, base: String.fromCharCode(0xa981), shift: String.fromCharCode(0xa980), text: true },
    Period: { row: 5, base: String.fromCharCode(0xa982), shift: String.fromCharCode(0xa9bd), text: true },
    Slash: { row: 5, base: String.fromCharCode(0xa983), shift: String.fromCharCode(0xa9bf), text: true },
    ShiftRight: { row: 5, base: '⇧', text: false, class: 'shift' },
    // Row 6
    ControlLeft: { row: 6, base: '^', text: false, class: 'ctrl' },
    AltLeft: { row: 6, base: '⌥', text: false, class: 'alt' },
    MetaLeft: { row: 6, base: '⌘', text: false, class: 'meta' },
    Space: { row: 6, base: ' ', text: true, class: 'space' },
    MetaRight: { row: 6, base: '⌘', text: false, class: 'meta' },
    AltRight: { row: 6, base: '⌥', text: false, class: 'alt' },
};

// Event Listeners 

$(window).on('load', () => {
    for (let i = 1; i < 7; ++i) {
        generateRows(i, state)
        //generateKeys('.row-' + i, state);
    }
});

// For the physical keyboard

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

// For the virtual keyboard

$keyboard.on('click', '.text', e => {
    let textToInsert = $(e.target).text();
    insertText(textToInsert);

    if (typeof keys['ShiftLeft'] !== 'undefined' ||
        typeof keys['ShiftRight'] !== 'undefined') {

        delete keys['ShiftLeft'];
        delete keys['ShiftRight'];

        changeState();
    }
});

$keyboard.on('click', '.backspace', () => {
    let curPos = $editor[0].selectionStart;
    
    if (curPos === 0)
        return;
    
    let $editorVal = $editor.val();   
    $editor.val($editorVal.slice(0, curPos - 1) + $editorVal.slice(curPos));

    $editor.focusOnPos(curPos + 1);
});

$keyboard.on('click', '.tab', () => {
    insertText('\t');
});

$keyboard.on('click', '.capslock', () => {
    console.log(state);
    changeState();
    console.log(state);
});

$keyboard.on('click', '.enter', () => {
    insertText('\n');
});

$keyboard.on('click', '.shift', () => {
    keys['ShiftLeft'] = true;
    keys['ShiftRight'] = true;

    changeState();
});

// Helper Functions

function generateRows(row, state) {
    if ($keyboard.children().length == 6)
        $keyboard.empty();

    $rowDiv = $('<div><div>');
    $rowDiv.addClass('row ' + 'row-' + row);
    $keyboard.append($rowDiv);
    rowSubset = Object.keys(mapping).filter(objectKey => {
        return mapping[objectKey].row == row;
    });
    rowSubset.forEach(keyCode => {
        $keyDiv = $('<div id=' + keyCode + '></div>');
        let class_ = '';
        if (mapping[keyCode].class)
            class_ = mapping[keyCode].class;

        let text = '';
        if (mapping[keyCode].text)
            text = 'text';

        $keyDiv.addClass('key ' + class_ + ' ' + text);

        if (typeof mapping[keyCode][state] !== 'undefined')
            $keyDiv.html(mapping[keyCode][state]);
        else
        $keyDiv.html(mapping[keyCode].base);

        console.log($keyDiv);

        $rowDiv.append($keyDiv);
    });   
}

function changeState() {
    if (state === 'shift') {
        state = 'base'
        for (let i = 1; i < 7; ++i) {
            generateRows(i, 'base');
        }
    } else {
        state = 'shift';
        for (let i = 1; i < 7; ++i) {
            generateRows(i, 'shift');
        }
    }
}

function insertText(textToInsert) {
    let $editorVal = $editor.val();
    let curPos = $editor[0].selectionStart;
        
    $editor.val($editorVal.slice(0, curPos) + textToInsert + $editorVal.slice(curPos));
    $editor.focusOnPos(curPos + 1);
}