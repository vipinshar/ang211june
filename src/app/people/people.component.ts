import { Component, OnInit } from '@angular/core';
import { PeopleModel } from './shared/people-model';
import { PeopleserviceService } from './shared/peopleservice.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
   providers: [PeopleserviceService],
})

export class PeopleComponent {
 constructor(private _PeopleserviceService: PeopleserviceService) {  }
  model = new PeopleModel();
 message='';

  SaveRecord() {
    this._PeopleserviceService.saveData(this.model);
    this.model = new PeopleModel();
    this.message="Thank you we will send OTP on this Number on 10th June";
  }
}
