import {Component} from '@angular/core';

import {TextGenerator} from './demo.module';

@Component({
  selector: 'app',
  templateUrl: 'app/views/app.component.html'
})
export class AppComponent {
  public message : string;

  constructor (){
    let generator = new TextGenerator();  
    this.message = generator.genText();
  }

}