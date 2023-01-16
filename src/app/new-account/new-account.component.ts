import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { accountModel } from './account.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  
  compte = new accountModel();

  onClickSubmit(){
    console.log(this.compte)
  }

}
