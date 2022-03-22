import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { SwNavbarComponent } from "../core/components/nav-bar/sw-navbar.component";
import { DataTablesModule } from "angular-datatables";
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import {MatTableModule} from '@angular/material/table'
import {MatInputModule} from '@angular/material/input';
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ExtensionListComponent } from './components/extension/extension-list/extension-list.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { AddExtensionComponent } from './components/extension/add-extension/add-extension.component';
import { EditExtensionComponent } from './components/extension/edit-extension/edit-extension.component';
import { MatSelectModule } from "@angular/material/select";
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      BrowserModule, 
      DataTablesModule,
      MatTableModule,
      MatInputModule,
      MatListModule,
      MatSelectModule,
      MatPaginatorModule,
      RouterModule.forChild([])
    ],
    declarations: [  

  
    AdminDashboardComponent, ExtensionListComponent, UserListComponent, AddUserComponent, AddExtensionComponent, EditExtensionComponent, EditUserComponent
  ],
    exports: [
    ]
  })
  export class AdminModule { }