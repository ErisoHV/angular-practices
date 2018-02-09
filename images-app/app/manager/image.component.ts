import {Component} from '@angular/core';

@Component({
  selector: 'image-manager',
  templateUrl: 'app/manager/image.component.html'
})
export class ImageComponent {
    public imageURL : string;
    public imageAux : string;

    public save(){
        this.imageURL = this.imageAux;
    }

}