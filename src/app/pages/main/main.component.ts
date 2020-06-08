import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data = [
    {
        "title": "Melon Smoothie",
        "imageURL": "https://goo.gl/eeSEYc"
    }, {
        "title": "Negronisecco",
        "imageURL": "https://goo.gl/bfdzQ9"
    },
 ]

  constructor(private page: Page) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true
  }

}
