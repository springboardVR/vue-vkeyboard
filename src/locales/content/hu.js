// Keyboard Language
// please update this section to match this language and email me with corrections!
// hu = ISO 639-1 code for Hungarian
// ***********************
export default  {
	language: 'Magyar (Hungarian)',
	display : {
		'a'      : '\u2714:Rendben (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Rendben:Rendben (Shift+Enter)',
		'alt'    : 'AltGr:Alternate Graphemes',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'T\u00f6r\u00f6l:Backspace',
		'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
		'cancel' : 'M\u00e9gsem:Cancel (Esc)',
		'clear'  : 'C:Clear',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Change Sign',  // +/- sign for num pad
		'space'  : '\u00A0:Space',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Haszn\u00e1ld az eg\u00e9r g\u00f6rget\u0151t a t\u00f6bbi billenty\u0171 \u00e1tv\u00e1lt\u00e1shoz',
};
