import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AdminModule } from './admin/admin.module';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { GetAllExistingpatientsComponent } from './admin/components/get-all-existingpatients/get-all-existingpatients.component';
import { GetAllNewpatientsComponent } from './admin/components/get-all-newpatients/get-all-newpatients.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientOneComponent } from './core/components/add-patient-one/add-patient-one.component';
import { AddPatientThreeComponent } from './core/components/add-patient-three/add-patient-three.component';
import { AddPatientTwoComponent } from './core/components/add-patient-two/add-patient-two.component';
import { ExistingPatientDataComponent } from './core/components/existing-patient-data/existing-patient-data.component';
import { ExistingPatientComponent } from './core/components/existing-patient/existing-patient.component';
import { HomeComponent } from './core/components/home/home.component';
import { MainPatientComponent } from './core/components/main-patient/main-patient.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { PatientDataComponent } from './core/components/patient-data/patient-data.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AdminModule,
    AppRoutingModule,
    SharedModule,

    RouterModule.forChild([
      {path:"**",component: PageNotFoundComponent},
      {
        path:'',
        component : HomeComponent
      },
      {
        path:'admin',
        component : AdminDashboardComponent
      },
      {
        path:'add-patient-one',
        component : PatientDataComponent
      },
      {
        path:'add-patient-two',
        component : AddPatientTwoComponent
      },
      {
        path:'add-patient-three',
        component : AddPatientThreeComponent
      },
      {
        path:'existing-patient',
        component : ExistingPatientComponent
      },
      {
        path:'main-patient-existing',
        component : ExistingPatientDataComponent
      },
      {
        path:'admin/all-new-patients',
        component : GetAllNewpatientsComponent
      },
      {
        path:'admin/all-existing-patients',
        component : GetAllExistingpatientsComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
