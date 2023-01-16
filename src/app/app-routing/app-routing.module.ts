import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConnectAdminComponent } from '../connect-admin/connect-admin.component';
import { ConnectGuichetComponent } from '../connect-guichet/connect-guichet.component';
import { InterfaceAdminComponent } from '../interface-admin/interface-admin.component';
import { InterfaceGuichetComponent } from '../interface-guichet/interface-guichet.component';
import { NewAccountComponent } from '../new-account/new-account.component';
import { AjouterFileComponent } from '../ajouter-file/ajouter-file.component';
import { ModifierFileComponent } from '../modifier-file/modifier-file.component';
import { HomeComponentComponent } from '../home-component/home-component.component';


export const appRouteList: Routes = [
  {
      path: 'connect-admin',
      component: ConnectAdminComponent
  },
  {
      path: 'connect-guichet',
      component: ConnectGuichetComponent
  },
  {
    path: 'interface-admin',
    component: InterfaceAdminComponent
  },
  {
    path: 'interface-guichet',
    component: InterfaceGuichetComponent
  },
  {
    path: 'new-account',
    component: NewAccountComponent
  },
  {
    path: 'ajouter-file',
    component: AjouterFileComponent
  },
  {
    path: 'modifier-file',
    component: ModifierFileComponent
  },
  {
      path: '**',
      component: HomeComponentComponent
  }
  
];

@NgModule({
  exports: [
    RouterModule
],
imports: [
    RouterModule.forRoot(appRouteList)
]
})
export class AppRoutingModule { }
