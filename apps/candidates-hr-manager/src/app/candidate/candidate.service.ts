import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private candidatesUrl = 'https://randomuser.me/api?results=10';
  private candidates: Observable<any>;

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<any> {
    this.candidates = this.http.get<any[]>(this.candidatesUrl);
    return this.candidates;
  }

  getCandidate(id: number): Observable<any> {
    const candidate = this.candidates.pipe(filter(candidates => candidates.results.id.value === id));
    return candidate;
  }
}
