import { Component, OnInit } from '@angular/core';
import { takePicture } from 'nativescript-camera'
import * as imageSourceModule from "tns-core-modules/image-source"
var fs = require("file-system")
import * as Permissions from "nativescript-permissions";

declare var android: any;
@Component({
  selector: 'ns-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  public saveImage
  constructor() { }

  ngOnInit(): void {
    Permissions.requestPermission(android.Manifest.permission.CAMERA, "Needed for connectivity status").then(() => {
      console.log("Permission granted!");
  }).catch(() => {
      console.log("Permission is not granted (sadface)");
  });
  }


  openCam() {
    


    var mill = (new Date).getTime()
    var that = this
    takePicture({width: 300, height: 300, keepAspectRatio: true}).then((function (img) {
      let source = new imageSourceModule.ImageSource()
      source.fromAsset(img).then((source) => {
        let folder = fs.knownFolders.documents()
        var path = fs.path.join(folder.path,"SaveImage" + mill + ".png")
        var saved = source.saveToFile(path, "png")
        this.saveImage = path
      })
      
    }))
  }
}
