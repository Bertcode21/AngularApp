import { Component } from "@angular/core";
import { TopHead } from "./top-menu/top-head";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
     imports: [TopHead],
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent {

}