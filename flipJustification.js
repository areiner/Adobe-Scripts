/////////////////////////////////////////////////////////////////
//Flip alignments of left and right text to correct for Arabic text
//>=--------------------------------------
// When text is flipped for right reading it damages our text placement. 
// This script swaps out the position
//>=--------------------------------------
// JS code (c) copyright: Aaron Reiner ( areiner@gmail.com )
////////////////////////////////////////////////////////////////// 


// a quick list of all he options:
// Justification.CENTER
// Justification.FULLJUSTIFY
// Justification.FULLJUSTIFYLASTLINECENTER
// Justification.FULLJUSTIFYLASTLINELEFT
// Justification.FULLJUSTIFYLASTLINERIGHT
// Justification.LEFT
// Justification.RIGHT
righty = Justification.RIGHT;
lefty = Justification.LEFT;


try
{
	// Check current document for textFrames.
	if ( app.documents.length < 1 ) {
		alert ( "open a document with text objects and select them." );
	}
	else {
		docRef = app.activeDocument;
		if ( docRef.textFrames.length < 1 ) {
			alert ( "Select some text objects." );
		}
		//where text fames are selected swap the jusification
		else { 
			sel = docRef.selection;
			var sellen = sel.length;
			for (var i=0;i<sellen ;i++)
			{
				if(sel[i].typename == "TextFrame"){
					if(sel[i].story.textRange.justification == Justification.LEFT){
						// shim to get cs 5 and 6 to rejustfy http://forums.adobe.com/message/5057780
						sel[i].story.resize(100.1,100.1);
						sel[i].story.resize(99.9,99.9);
						sel[i].story.textRange.justification = Justification.RIGHT;
					}
					else if(sel[i].story.textRange.justification == Justification.RIGHT){
						sel[i].story.textRange.justification = Justification.LEFT;
					}
					else if(sel[i].story.textRange.justification == Justification.FULLJUSTIFYLASTLINELEFT){
						// shim to get cs 5 and 6 to rejustfy http://forums.adobe.com/message/5057780
						sel[i].story.resize(100.1,100.1);
						sel[i].story.resize(99.9,99.9);
						sel[i].story.textRange.justification = Justification.FULLJUSTIFYLASTLINERIGHT;
					}
					else if(sel[i].story.textRange.justification == Justification.FULLJUSTIFYLASTLINERIGHT){
						sel[i].story.textRange.justification = Justification.FULLJUSTIFYLASTLINELEFT;
					}
				}
			}
		}
	}
	 
	 
		
}
catch (e){
	alert("Script Failed!\n"+e);
}
