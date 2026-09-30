import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'one-piece-character',
  templateUrl: './one-piece-character.component.html',
  styleUrls: ['./one-piece-character.component.scss']
})
export class OnePieceCharacterComponent implements OnInit {

  public title = 'One Piece';
  public characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacter().subscribe(characters => this.characters = characters);
  }

}
