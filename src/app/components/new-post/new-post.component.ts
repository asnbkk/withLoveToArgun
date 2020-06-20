import { Component, OnInit } from '@angular/core';
import { takePicture } from 'nativescript-camera'
import { ImageSource, fromFile, fromResource, fromBase64 } from "tns-core-modules/image-source";
import { Folder, path, knownFolders } from "tns-core-modules/file-system";
let imagePicker = require("nativescript-imagepicker")
import { ImageAsset } from "tns-core-modules/image-asset";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums"; 
import { Mapbox, MapboxViewApi } from "nativescript-mapbox"
// import { registerElement } from "nativescript-angular/element-registry";
// registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);
// let fs = require("file-system")
import * as Permissions from "nativescript-permissions";
declare let android: any;

@Component({
  selector: 'ns-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  public saveImaged
  public myImage = []
  public backgrounds = ["yellow", "green", "blue"]
  constructor() { }

  ngOnInit(): void {
    

    Permissions.requestPermission(android.Manifest.permission.CAMERA, "Needed for connectivity status").then(() => {
      console.log("Permission granted!");
    }).catch(() => {
      console.log("Permission is not granted (sadface)");
    });
  
    // geolocation.enableLocationRequest()
    //   .then(() => {
    //     geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high })
    //       .then((location) => {
    //         alert(JSON.stringify(location))
    //       })
    //   })
    //   .catch(() => {
        
    //   })
  }

  onMapReady(args) {
    let map: MapboxViewApi = args.map
    map.getUserLocation().then(
      function(userLocation) {
        alert("Current user location" + userLocation)
      }
    )
  }

  openCam() {
    let mill = (new Date).getTime()
    let that = this
    takePicture({ width: 300, height: 300, keepAspectRatio: true }).then((function (img) {
      // const source = new ImageSource()
      ImageSource.fromAsset(img).then((ImageSource) => {
        const folder = knownFolders.documents().path
        const filePath = path.join(folder, "imagehelloworld" + mill + ".png")
        const saved = ImageSource.saveToFile(filePath, "png")

        // const folder: Folder = <Folder>knownFolders.currentApp();
        // const folderPath: string = path.join(folder, "imagehelloworld" + mill + ".png");
        const imageFromLocalFile: ImageSource = <ImageSource> fromFile(filePath);
        console.log(imageFromLocalFile.android, "local file image")
        if (saved) {
          console.log("Image saved successfully!", imageFromLocalFile.android)
          that.myImage.push(filePath)
        }
      })
        .catch((e) => {
          console.log("Error: ");
          console.log(e)
        });
    }))
  }
  
}
