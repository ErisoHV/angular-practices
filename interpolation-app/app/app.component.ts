import {Component} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app/views/app.component.html'
})
export class AppComponent {
  public count : number = 2;
  public indicator : boolean = true;
  public title : string = "Template Binding";

  public messages : string[] = ["Alpha", "Bravo", "Charlie"];

  //title: string = "Demo Angular 4.x  Application";
  items: string[] = ["Alfa","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"];
}