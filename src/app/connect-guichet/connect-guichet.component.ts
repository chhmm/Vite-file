import { Component } from '@angular/core';
import {authGuichetModel} from './auth-guichet.model';

@Component({
  selector: 'app-connect-guichet',
  templateUrl: './connect-guichet.component.html',
  styleUrls: ['./connect-guichet.component.css']
})
export class ConnectGuichetComponent {

  auth = new authGuichetModel();

  onClickSubmit(){
    console.log(this.auth)
  }

}
