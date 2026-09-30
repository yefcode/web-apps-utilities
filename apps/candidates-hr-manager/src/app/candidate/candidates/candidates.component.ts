import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { ModalService } from 'src/app/common/services/modal.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.sass']
})
export class CandidatesComponent implements OnInit {

  public candidates: any;
  public selectedCandidate: any;

  constructor(private candidateService: CandidateService,
    private modalService: ModalService) { }

  ngOnInit() {
    this.getCandidates();
  }

  getCandidates(): void {
    this.candidateService.getCandidates()
    .subscribe(candidates => this.candidates = candidates.results);
  }

  onSelect(candidate: any): void {
    this.selectedCandidate = candidate;
    this.modalService.open('modal-id-candidate');
  }

}
