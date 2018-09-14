import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidateService } from '../../services/candidates/candidate.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  candidateDetail: object;
  objectKeys = Object.keys;

  constructor(private csc: CandidateService, private candidate: HttpClient) { }

  ngOnInit() {
    const obs = this.candidate.get('https://randomuser.me/api/');
    obs.subscribe((res) => {
      this.candidateDetail = res.results;
      console.log(this.candidateDetail);
      
    });
  }

}
