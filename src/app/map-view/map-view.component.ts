import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {

  latitude: number;
  longitude: number;
  zoom:number;


  ngOnInit() {
    this.setCurrentLocation();
    // setInterval(()=>{
    //   this.setCurrentLocation();
    // },5000)
  }

    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 15;
          console.log(this.latitude,this.longitude);
          
        });
      }
    }

}
