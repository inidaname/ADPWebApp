import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidateService } from '../../services/candidates/candidate.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  candidatesForm: FormGroup;
  candidateDetail: object;
  presidentialList: any;
  objectKeys = Object.keys;
  states: Array<string> = ['ABIA', 'ADAMAWA', 'AKWA IBOM', 'ANAMBRA', 'BAUCHI',
  'BAYELSA', 'BENUE', 'BORNO', 'CROSS RIVER', 'DELTA', 'EBONYI', 'EDO', 'EKITI',
  'ENUGU', 'FCT', 'GOMBE', 'IMO', 'JIGAWA', 'KADUNA', 'KANO', 'KATSINA', 'KEBBI', 'KOGI',
  'KWARA', 'LAGOS', 'NASARAWA', 'NIGER', 'OGUN', 'ONDO', 'OSUN', 'OYO', 'PLATEAU', 'RIVERS',
   'SOKOTO', 'TARABA', 'YOBE', 'ZAMFARA'];

  constructor(
    private csc: CandidateService,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    const presidency = this.csc.getCandidatesByPosition('president');
    presidency.subscribe((res: any) => this.presidentialList = res.member);

    this.candidatesForm = this.fb.group({
      candidateState: [''],
      candidatePosition: ['']
    });
  }
}
