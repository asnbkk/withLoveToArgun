import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page"
import { takePicture } from 'nativescript-camera'
import { ImageSource, fromFile, fromResource, fromBase64 } from "tns-core-modules/image-source";
import { Folder, path, knownFolders } from "tns-core-modules/file-system";
import { ImageAsset } from "tns-core-modules/image-asset";
let fs = require("file-system")
import * as Permissions from "nativescript-permissions";
declare let android: any;

@Component({
  selector: 'ns-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  public saveImaged
  constructor() { }

  ngOnInit(): void {
    Permissions.requestPermission(android.Manifest.permission.CAMERA, "Needed for connectivity status").then(() => {
      console.log("Permission granted!");
    }).catch(() => {
      console.log("Permission is not granted (sadface)");
    });
  }

  openCam() {
    // const page: Page = <Page>args.object.page;
    // const vm = page.bindingContext;
    // const folder: Folder = <Folder>knownFolders.currentApp();
    // const pathImage = path.join(folder.path, "images/logo.png");
    // const imageAsset = new ImageAsset(pathImage);
    // imageAsset.options = {
    //   width: 100,
    //   height: 100,
    //   keepAspectRatio: true
    // };
    // let mill = (new Date).getTime()
    // const source = new ImageSource();
    // ImageSource.fromAsset(imageAsset)
    //   .then((imageSource: ImageSource) => {
    //     const folderPath: string = knownFolders.documents().path;
    //     const fileName = "test.png";
    //     const filePath = path.join(folderPath, fileName + mill + ".png")
    //     const saved: boolean = imageSource.saveToFile(filePath, "png");
    //     if (saved) {
    //       console.log("Image saved successfully!");
    //     }
    //   })
    //   .catch((e) => {
    //     console.log("Error: ");
    //     console.log(e);
    //   });
    let mill = (new Date).getTime()
    let that = this
    takePicture({width: 300, height: 300, keepAspectRatio: true}).then((function (img) {
      // const source = new ImageSource()
      ImageSource.fromAsset(img).then((ImageSource) => {
        const folder = fs.knownFolders.documents()
        console.log(fs.knownFolders.documents().path)
        const path = fs.path.join(folder.path,"image" + mill + ".png")
        const saved = ImageSource.saveToFile(path, "png")
        // this.saveImaged = path
        if (saved) {
                console.log("Image saved successfully!", path)
              }
            })
            .catch((e) => {
              console.log("Error: ");
              console.log(e)
            });
     }))
  }
}
