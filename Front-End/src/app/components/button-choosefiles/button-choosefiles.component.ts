import { Component } from '@angular/core';
import { CloudUploadService } from 'src/app/services/cloud-upload.service';

@Component({
  selector: 'app-button-choosefiles',
  templateUrl: './button-choosefiles.component.html',
  styleUrls: ['./button-choosefiles.component.scss'],
})
export class ButtonChoosefilesComponent {
  name: string = '';
  file: any;

  constructor(private uploadImage: CloudUploadService,
    ) {}

  // getName(name: string) {
  //   this.name = name;
  // }

  getFile(event: any) {
    this.file = event.target.files[0];
    console.log('FILE:', this.file);
  }

  submitData() {
    // CREATING THE OBJ
    let file = new FormData();
    file.set('name', this.name);
    file.set('file', this.file);
    file.append('file', this.file);

    // SUBMIT THIS DATA ON API
    this.uploadImage.uploadImage(file).subscribe((response) => {
      console.log(response);
    });
  }
}
