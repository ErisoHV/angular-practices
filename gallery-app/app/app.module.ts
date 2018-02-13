import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { GalleryItemsComponent } from './gallery/items.component';

@NgModule({
    imports:      [ 
        BrowserModule 
    ],
    declarations: [ 
        AppComponent, 
        GalleryItemsComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
