import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { ExtensionModel } from 'src/app/admin/interfaces/extension-model';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  extensionList: any[] = [];
  userModel : any = {};
  constructor( private af: AngularFirestore,  private router: Router
    ,public authService: AuthService) { }

  
  submit(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.userModel.userName,this.userModel.password)
      .then((userCredential) => {
        this.af.collection("Users").add(this.userModel);
        this.router.navigate(['/admin/user-list']);
     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

  }

  getExtensionList(){
    this.af.collection("extensions").snapshotChanges().subscribe((data) => {
      this.extensionList = [];
      data.map(e => {
        var y : any = e.payload.doc.data();
        y["$key"] = e.payload.doc.id;
        this.extensionList.push(y as any);
      });
    })
  }

  ngOnInit(): void {
    this.getExtensionList();
  }

  usersList(){
    this.router.navigate(['/admin/user-list']);
  }

}
