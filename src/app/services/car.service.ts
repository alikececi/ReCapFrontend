import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/car-detail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44347/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetails(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetail"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + 'cars/getbybrandid?brandId='+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + 'cars/getdetailsbycolorid?colorId='+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetail(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + 'cars/getcardetail?carId='+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}