import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showmap',
  templateUrl: './showmap.page.html',
  styleUrls: ['./showmap.page.scss'],
})
export class ShowmapPage implements OnInit {

  latitude: number;
  longitude: number;
  zoom:number;
  data: any=[];
  stop:any;
  track= false;

constructor(private router:Router){

}
  ngOnInit() {
    this.setCurrentLocation();
    this.starttrack();
  }

    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
         
          this.zoom = 15;
          console.log(this.latitude,this.longitude);
          let mapdata={
            lat:this.latitude,
            long:this.longitude
          }
          this.data.push(mapdata)
          console.log(this.data);
          
        });
      }
    }

    stoptrack(){
      this.track= true;
      setTimeout(()=>{
        clearInterval(this.stop);
      })
    }

    starttrack(){
      this.track= false;
      this.stop = setInterval(()=>{
        this.setCurrentLocation();
        console.log("location updated");
        
      },1000*30)
    }

    list(){
      this.router.navigate(['/home'])
    }


}
