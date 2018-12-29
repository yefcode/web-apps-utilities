import { Component, OnInit } from '@angular/core';
import { DevilFruit } from 'src/app/model/devil-fruit';
import { DevilFruitService } from './devil-fruit.service';

@Component({
  selector: 'one-piece-devil-fruit',
  templateUrl: './devil-fruit.component.html',
  styleUrls: ['./devil-fruit.component.scss']
})
export class DevilFruitComponent implements OnInit {

  public devilFruits: DevilFruit[] = [];
  public title = 'One Piece Devil Fruits';

  constructor(private devilFruitService: DevilFruitService) { }

  ngOnInit() {
    this.devilFruitService.getDevilFruit().subscribe(devilFruits => this.devilFruits = devilFruits);
  }

}
