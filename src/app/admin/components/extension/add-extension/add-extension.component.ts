import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddMediciationComponent } from 'src/app/shared/dialogs/add-mediciation/add-mediciation.component';
import { ExtensionModel } from '../../../interfaces/extension-model';

@Component({
  selector: 'app-add-extension',
  templateUrl: './add-extension.component.html',
  styleUrls: ['./add-extension.component.css']
})
export class AddExtensionComponent implements OnInit {

  extensionModel : ExtensionModel = {
    extensionName: '',
    extensionIndex: '',
    description: ''
  };
  constructor(private modalService: NgbModal,

    private af: AngularFirestore,
    private router: Router) { }

  
  submit(){
    this.af.collection("extensions").add(this.extensionModel);
    this.router.navigate(['/admin/ext-list']);
 
  }

  ngOnInit(): void {
  }

  extensionList(){
    this.router.navigate(['/admin/ext-list']);
  }

}
