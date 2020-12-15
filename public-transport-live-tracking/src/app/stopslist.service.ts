import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StopslistService {
  constructor(private http : HttpClient) { }
  public getStopsList(){
    var data =  this.http
    .get("./../assets/convertcsv.json");
   return data;
  }
}
