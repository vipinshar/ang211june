import { Component } from '@angular/core';
import { PeopleModel } from './people/shared/people-model';
import { PeopleserviceService } from './people/shared/peopleservice.service';

@Component({
  selector: 'vipin',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PeopleserviceService],
  
})

export class AppComponent {
  constructor(private _PeopleserviceService: PeopleserviceService) {  }
  model = new PeopleModel();
 message='';

  SaveRecord() {
    this._PeopleserviceService.saveData(this.model);
    this.model = new PeopleModel();
    this.message="Thank you we will send OTP on this Number on 10th June";
  }

}
