import { EventData } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";
import {Button} from "ui/button";
import {GridLayout} from "ui/layouts/grid-layout"
import {GestureTypes} from "ui/gestures"


var bt:Button;
var buttonState=0;
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    var layout:GridLayout = <GridLayout>page.getViewById("lt");
    var bt =<Button> page.getViewById("bt");
    // layout.on(GestureTypes.touch, function (args) {
    //     bt.animate({rotate:0, duration:100});
    //     console.log("layout tap");
    // });
}

export function onTap(args:EventData){
    var bt:Button =<Button> args.object;
    if(buttonState == 0){
        bt.animate({rotate:45, duration:100});
        buttonState=1;
    }
    else{
        bt.animate({rotate:0, duration:100});
        buttonState=0;
    }
    
    console.log("bt tap");
}