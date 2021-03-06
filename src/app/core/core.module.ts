import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SwNavbarComponent } from './components/nav-bar/sw-navbar.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { SignaturePadModule } from "angular2-signaturepad";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from "@angular/material/dialog";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      BrowserModule, 
      SignaturePadModule,
      NgbModule,
      MatMenuModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatTabsModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      RouterModule.forChild([])
    ],
    declarations: [  
    SwNavbarComponent,
    HomeComponent, PageNotFoundComponent, SignUpComponent, LoginComponent

  ],
    exports: [
        SwNavbarComponent
    ]
  })
  export class CoreModule { }