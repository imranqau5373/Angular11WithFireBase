import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExtensionModel } from 'src/app/admin/interfaces/extension-model';

@Component({
  selector: 'app-edit-extension',
  templateUrl: './edit-extension.component.html',
  styleUrls: ['./edit-extension.component.css']
})
export class EditExtensionComponent implements OnInit {
  extensionId = '';
  extensionModel : ExtensionModel = {
    extensionName: '',
    extensionIndex: '',
    description: ''
  };
  constructor(private af: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute) { }

  
  submit(){
    this.af.collection('extensions').doc(this.extensionId).update(this.extensionModel);
    this.router.navigate(['/admin/ext-list']);
 
  }

  ngOnInit(): void {
    this.extensionId = this.route.snapshot.params['id'];
    this.af.collection("extensions").doc(this.extensionId).snapshotChanges().subscribe((data) => {
      var y : any = data.payload.data();
      this.extensionModel = (y as ExtensionModel);
    })
  }

  extensionList(){
    this.router.navigate(['/admin/ext-list']);
  }

}
