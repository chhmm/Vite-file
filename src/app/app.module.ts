import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ConnectAdminComponent } from './connect-admin/connect-admin.component';
import { ConnectGuichetComponent } from './connect-guichet/connect-guichet.component';
import { AjouterFileComponent } from './ajouter-file/ajouter-file.component';
import { ModifierFileComponent } from './modifier-file/modifier-file.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { InterfaceGuichetComponent } from './interface-guichet/interface-guichet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NewAccountComponent,
    ConnectAdminComponent,
    ConnectGuichetComponent,
    AjouterFileComponent,
    ModifierFileComponent,
    InterfaceAdminComponent,
    InterfaceGuichetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
