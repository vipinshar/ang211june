import { Injectable } from '@angular/core';
import { PeopleModel } from './people-model';
import { RequestOptions, Request, RequestMethod, Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PeopleserviceService {

  constructor(private http: Http) { }
  private commentsUrl = 'http://nodeapivipin.herokuapp.com/api/v1/elevenjune/save';

  saveData(scope: PeopleModel) {
    debugger;
    let _headers = new Headers();
    _headers.append('Content-Type', 'application/json');
    _headers.append("Access-Control-Allow-Origin", "http://11june.cybersipahi.org/");
    _headers.append("Access-Control-Allow-Methods", "*");
    return this.http.post(this.commentsUrl, scope, { headers: _headers }).
      map((res: Response) => res.json()).subscribe();

    //catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
