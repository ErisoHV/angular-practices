import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import {ImageComponent} from './manager/image.component';

import {FormsModule} from '@angular/forms'

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule
    ],
    declarations: [ 
        AppComponent,
        ImageComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
