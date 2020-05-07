import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private httpClient:HttpClient) { }
  obtenerPeliculas(){
    return this.httpClient.get('http://www.omdbapi.com/?s=day&apikey=a8d854de');
  }

}
