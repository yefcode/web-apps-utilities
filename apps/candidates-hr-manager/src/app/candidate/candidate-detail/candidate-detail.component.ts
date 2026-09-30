import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/common/services/modal.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.sass']
})
export class CandidateDetailComponent implements OnInit {

  @Input() candidate: any;

  constructor( private modalService: ModalService ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalService.close('modal-id-candidate');
  }

}
