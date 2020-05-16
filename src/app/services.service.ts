import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }


  apidata(data){
    var headers = new HttpHeaders;
    return this.http.post("http://bmc.mlmsoftindia.com/api/v1/InchargeDashboard",data, {headers})
  }
}
