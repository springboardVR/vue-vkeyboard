/* French keyboard layouts
 * contains layout: french-azerty-1 and 'french-azerty-2'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/french.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'french-azerty-1' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://ascii-table.com/keyboard.php/189 & thanks to Nathana�l SEMHOUN: http://nathanael.semhoun.net */
export default {
	'name' : 'french-azerty-1',
	'lang' : ['fr'],
	'normal' : [
		"\u00b2 & \u00e9 \" ' ( - \u00e8 _ \u00e7 \u00e0 ) = {bksp}",
		"{tab} a z e r t y u i o p ^ $",
		"q s d f g h j k l m  \u00f9 * {enter}",
		"{shift} < w x c v b n , ; : ! {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"{sp:1} 1 2 3 4 5 6 7 8 9 0 \u00b0 + {bksp}",
		"{tab} A Z E R T Y U I O P \u00a8 \u00a3",
		"Q S D F G H J K L M % \u00b5 {enter}",
		"{shift} > W X C V B N ? . / \u00a7 {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u00b2 & ~ # { [ | ` \\ ^ @ ] } {bksp}",
		"{tab} a z \u20ac r t y u i o p ^ \u00a4",
		"q s d f g h j k l m  \u00f9 * {enter}",
		"{shift} < w x c v b n , ; : ! {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"{sp:1} 1 ~ # { [ | ` \\ ^ @ ] } {bksp}",
		"{tab} A Z \u20ac R T Y U I O P \u00a8 \u00a4",
		"Q S D F G H J K L M % \u00b5 {enter}",
		"{shift} > W X C V B N ? . / \u00a7 {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
};
