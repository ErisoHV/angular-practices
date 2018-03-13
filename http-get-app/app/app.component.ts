import { Component, Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
@Component({
  selector: 'app',
  templateUrl: 'app/views/app.component.html'
})
export class AppComponent {
  public origin : string;
  public dataURL : string = 'http://httpbin.org/ip';

  constructor(private http : Http){
    this.http.get(this.dataURL).toPromise()
      .then(response => this.origin = response.json().origin)
      .catch(error => console.error(error));
  }

/*  ngOnInit(){ // other way
      this.getItems().subscribe(ipData => this.origin = ipData.origin);
  }
*/
  public getItems() : Observable<IPData>{
    return this.http.get(this.dataURL)
        .map(this.extractData);
  }

  public extractData(res : Response) {
      return res.json();
  }
}