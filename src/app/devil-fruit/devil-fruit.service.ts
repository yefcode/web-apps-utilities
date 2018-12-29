import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DevilFruit } from '../devil-fruit';

@Injectable({
  providedIn: 'root'
})
export class DevilFruitService {

  devilFruitUrl = 'api/devilFruit';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getDevilFruit(): Observable<DevilFruit[]> {
    return this.http.get<DevilFruit[]>(this.devilFruitUrl);
  }
}
