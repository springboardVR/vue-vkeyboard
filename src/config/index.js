export const frCALocale = {
  name: 'fr_CA',
  language: 'Fran\u00e7ais (French)',
  display: {
    'a': '\u2714:Valider (Shift+Enter)', // check mark - same action as accept
    'accept': 'Valider:Valider (Shift+Enter)',
    'alt': 'AltGr:Charact\u00e8re alternatif',
    'b': '\u2190:Suppr arri\u00e8re', // Left arrow (same as &larr;)
    'bksp': '\u2190Suppr:Suppr arri\u00e8re',
    'c': '\u2716:Annuler', // big X, close - same action as cancel
    'cancel': 'Annuler:Annuler (\u00c9chap)',
    'clear': 'C:Effacer', // clear num pad
    'combo': '\u00f6:Bacsuler les touches combo',
    'dec': '.:Decimal', // decimal point for num pad (optional), change '.' to ',' for European format
    'e': '\u21b5:Entr\u00e9e', // down, then left arrow - enter symbol
    'enter': 'Entr\u00e9e:Entr\u00e9e',
    'lock': '\u21ea Verr Mag:Verouillage majuscule', // caps lock
    's': '\u21e7:Majuscule', // thick hollow up arrow
    'shift': 'Maj:Majuscule',
    'sign': '\u00b1:Change de signe', // +/- sign for num pad
    'space': '&nbsp;:Espace',
    't': '\u21e5:Tabulation', // right arrow to bar (used since this virtual keyboard works with one directional tabs)
    'tab': '\u21e5 Tab:Tabulation' // \u21b9 is the true tab symbol (left & right arrows)
  },
  wheelMessage: 'Utiliser la molette de la souris pour voir les autres lettres'
}

export const frCALayout = {
  'name': 'fr_CA',
  'lang': ['fr_CA'],
  'normal': [
    '# 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
    '{tab} q w e r t y u i o p ^ \u00b8 <',
    'a s d f g h j k l ; ` {enter}',
    '{shift} \u00ab z x c v b n m , . / {shift}',
    '{accept} {alt} {space} {alt} {cancel}'
  ],
  'shift': [
    '| ! " / $ % ? & * ( ) _ + {bksp}',
    '{tab} Q W E R T Y U I O P ^ \u00a8 >',
    'A S D F G H J K L : ` {enter}',
    "{shift} \u00bb Z X C V B N M ' . / {shift}",
    '{accept} {alt} {space} {alt} {cancel}'
  ],
  'alt': [
    '\\ \u00b1 @ \u00a3 \u00a2 \u00a4 \u00ac \u00a6 \u00b2 \u00b3 \u00bc \u00bd \u00be {bksp}',
    '{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00a7 \u00b6 [ ] }',
    '{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~ { {enter}',
    '{shift} \u00b0 {empty} {empty} {empty} {empty} {empty} {empty} \u00b5 \u00af \u00ad {empty} {shift}',
    '{accept} {alt} {space} {alt} {cancel}'
  ]
}
