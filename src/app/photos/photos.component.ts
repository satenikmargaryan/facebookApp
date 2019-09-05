import { Component, OnInit } from '@angular/core';
declare var FB: any;
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any[] = [];

  constructor() { }

  ngOnInit() {
    const userId = localStorage.getItem('userId');

    FB.api(
      `${userId}/photos`,
      { fields: 'id,name,images'},
      function (response) {
        if (response && !response.error) {
          localStorage.removeItem('data');
          localStorage.setItem('data', JSON.stringify(response.data));
        }
      }
    );
    setTimeout(function(){
      this.photos = JSON.parse(localStorage.getItem('data'));
    }, 0);
  }

}
