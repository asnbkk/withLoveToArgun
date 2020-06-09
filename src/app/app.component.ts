import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    constructor(private page: Page) {

    }

    ngOnInit() {
    }
    onPageLoaded(args) {
        const page = <Page>args.object;
        page.actionBarHidden = true;
    }
 }
