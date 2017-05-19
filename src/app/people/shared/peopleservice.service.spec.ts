/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeopleserviceService } from './peopleservice.service';

describe('PeopleserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleserviceService]
    });
  });

  it('should ...', inject([PeopleserviceService], (service: PeopleserviceService) => {
    expect(service).toBeTruthy();
  }));
});
