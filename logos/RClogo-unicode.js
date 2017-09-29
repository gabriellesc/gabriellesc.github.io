let unicode = `
┌───────────────────────┐
│ ┌───────────────────┐ │
│ │ ┌───────────────┐ │ │
│ │ ├─┐ ┌─┐ ┌─┐     │ │ │
│ │ ├─┘ └─┘ └─┘     │ │ │
│ │ │ ┌───┐ ┌───┐   │ │ │
│ │ │ └───┘ └───┘   │ │ │
│ │ │               │ │ │
│ │ └───────────────┘ │ │
│ └───────────────────┘ │
└───────┐       ┌───────┘
  ┌─────┘       └─────┐
┌─┘   ┌─┐ ┌─┐ ┌─┐ ┌─┐ └─┐
│   ┌─┼─┼─┼─┼─┼─┼─┼─┘   │
│   └─┘ └─┘ └─┘ └─┘     │
└───────────────────────┘
`;

let charMap = {
    '┌': '&#x250c;',
    '┐': '&#x2510;',
    '└': '&#x2514;',
    '┘': '&#x2518;',
    '─': '&#x2500;',
    '│': '&#x2502;',
    '┼': '&#x253c;',
    '├': '&#x251c',
    ' ': '&nbsp;'
};

document.getElementById('unicode-container').innerHTML = unicode.replace(/./g, c => charMap[c]).trim();
document.getElementById('unicode-container').style['font-size'] = '14px';
document.getElementById('unicode-container').style['line-height'] = '1';
