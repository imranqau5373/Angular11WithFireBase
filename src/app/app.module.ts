import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ToastrModule } from 'ngx-toastr';
import { AdminModule } from './admin/admin.module';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { environment } from 'src/environments/environment';
import { AddUserComponent } from './admin/components/users/add-user/add-user.component';
import { AddExtensionComponent } from './admin/components/extension/add-extension/add-extension.component';
import { UserListComponent } from './admin/components/users/user-list/user-list.component';
import { ExtensionListComponent } from './admin/components/extension/extension-list/extension-list.component';
import { LoginComponent } from './core/components/login/login.component';
import { SignUpComponent } from './core/components/sign-up/sign-up.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './shared/service/auth.service';
import { AuthGuard } from '../app/shared/guard/auth.guard';
import { EditExtensionComponent } from './admin/components/extension/edit-extension/edit-extension.component';
import { EditUserComponent } from './admin/components/users/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
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

    AdminModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),

    CoreModule,
    RouterModule.forChild([
      {
        path:"*",
        component: PageNotFoundComponent
      },
      {
        path:'',
        component : HomeComponent
      },
      {
        path:'login',
        component : LoginComponent
      },
      {
        path:'signup',
        component : SignUpComponent
      },
      {
        path:'admin',
        component : AdminDashboardComponent,
        canActivate: [AuthGuard] 
      },
      {
        path:'admin/ext-list',
        component : ExtensionListComponent
      },

      {
        path:'admin/user-list',
        component : UserListComponent
      },

      {
        path:'admin/add-ext',
        component : AddExtensionComponent
      },
      {
        path:'admin/edit-ext/:id',
        component : EditExtensionComponent
      },


      {
        path:'admin/user-add',
        component : AddUserComponent
      },
      {
        path:'admin/user-edit/:id',
        component : EditUserComponent
      },


    ]),

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
