import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddMediciationComponent } from 'src/app/shared/dialogs/add-mediciation/add-mediciation.component';

@Component({
  selector: 'app-add-extension',
  templateUrl: './add-extension.component.html',
  styleUrls: ['./add-extension.component.css']
})
export class AddExtensionComponent implements OnInit {

  extensionModel : any = {};
  constructor(private modalService: NgbModal) { }

  
  submit($extensionModel:any){
    const modalRef = this.modalService.open(AddMediciationComponent, { size: 'small', backdrop: 'static' });
 
  }

  ngOnInit(): void {
  }

}
