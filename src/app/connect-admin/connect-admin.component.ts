import { Component } from '@angular/core';
import {authAdminModel} from './auth-admin.model';

@Component({
  selector: 'app-connect-admin',
  templateUrl: './connect-admin.component.html',
  styleUrls: ['./connect-admin.component.css']
})
export class ConnectAdminComponent {

  auth = new authAdminModel();
  onClickSubmit(){
    console.log(this.auth)
  }

}
