import { ServicesService } from './../services.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data:any={
    InchargeId:'',
    WardNo:'',
    FromDate:'',
    ToDate:''
  }

  constructor(private services:ServicesService) {}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apidata();
    
  }

  apidata(){
    this.services.apidata(this.data).subscribe(res=>{
      console.log(res);
      
    })
  }



}
