"use strict";
var bt;
var buttonState = 0;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    var layout = page.getViewById("lt");
    var bt = page.getViewById("bt");
    // layout.on(GestureTypes.touch, function (args) {
    //     bt.animate({rotate:0, duration:100});
    //     console.log("layout tap");
    // });
}
exports.navigatingTo = navigatingTo;
function onTap(args) {
    var bt = args.object;
    if (buttonState == 0) {
        bt.animate({ rotate: 45, duration: 100 });
        buttonState = 1;
    }
    else {
        bt.animate({ rotate: 0, duration: 100 });
        buttonState = 0;
    }
    console.log("bt tap");
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map