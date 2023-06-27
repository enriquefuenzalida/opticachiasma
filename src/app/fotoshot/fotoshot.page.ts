import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera/dist/esm/definitions';

@Component({
  selector: 'app-fotoshot',
  templateUrl: './fotoshot.page.html',
  styleUrls: ['./fotoshot.page.scss'],
})
export class FotoshotPage implements OnInit {

  fotocap: any;

  constructor() { }

  ngOnInit() {
  }

  fotoToma = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });

    this.fotocap=image.dataUrl;
  };

}
