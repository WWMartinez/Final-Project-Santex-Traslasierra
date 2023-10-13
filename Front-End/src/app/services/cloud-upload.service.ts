import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CloudUploadService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/upload';
  }
  // POST https://api.cloudinary.com/v1_1/demo/image/upload

  uploadImage(vals: any): Observable<any> {
    let data = vals;
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, data);
  }

}
