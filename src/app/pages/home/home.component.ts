import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
