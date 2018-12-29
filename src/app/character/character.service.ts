import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  onePieceCharacterUrl = 'api/characters';  // URL to web api

  constructor(private http: HttpClient
    /* private angularDatabase: AngularFirestore */) {
    /* angularDatabase.collection('').valueChanges(); */ // TODO IMPLEMENT
  }

  getCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(this.onePieceCharacterUrl);
  }
}
