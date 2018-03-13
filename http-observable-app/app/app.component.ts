import {Component} from '@angular/core';

import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app',
  templateUrl: 'app/views/app.component.html'
})
export class AppComponent {
  public myIP : string;

  constructor(public http : Http){
    this.getIpAddress().subscribe(ipdata => this.myIP = ipdata.json().origin);
  }

  private getIpAddress() : Observable<Response>{
    return this.http.get('http://httpbin.org/ip');
  }


}