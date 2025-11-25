import { Component } from "@angular/core";
import { TopHead } from "./top-menu/top-head";
import { MainMenu } from "./main-menu/main-menu";


@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
     imports: [TopHead, MainMenu],
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent {

}