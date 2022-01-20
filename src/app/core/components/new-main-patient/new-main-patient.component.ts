import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-main-patient',
  templateUrl: './new-main-patient.component.html',
  styleUrls: ['./new-main-patient.component.css']
})
export class NewMainPatientComponent implements OnInit {

  @Input()
  patientMainModel : any = {};
  @Output()
  submitMain = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.patientMainModel.adult = "No";
  }

  submit($patient:any){
    debugger;
    this.submitMain.emit(this.patientMainModel);

  }

  onChangeGuardianCardPic($event:any){
    this.patientMainModel.guardianIdCardPicture = $event.target.files[0];

  }

  dateChange($event:any){
    var age18Date = new Date();
    const age = 18 * 365;
    age18Date.setDate(age18Date.getDate() - age);
    var setDate = new Date($event.target.value);
    if(setDate >= age18Date){
      this.patientMainModel.adult = "Yes";
    }
    else{
      this.patientMainModel.adult = "No";
      this.patientMainModel.guardianName = this.patientMainModel.guardianRelation = this.patientMainModel.guardianIdCardPicture = "";
    }

  }

  onChangeInsFrontPic($event : any) {
    this.patientMainModel.insuranceFront = $event.target.files[0];
  }

  onChangeIdCardPic($event : any) {
    this.patientMainModel.idCardPicture = $event.target.files[0];
  }

  onChangeInsBacktPic($event : any) {
    this.patientMainModel.insuranceBack = $event.target.files[0];
  }

  changeReasonForVisit($event:any){
    if($event.target.value != "Other"){
      this.patientMainModel.reasonForVisitOther = ""; 
    }

  }

}