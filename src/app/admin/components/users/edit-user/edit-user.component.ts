import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId : string | undefined;
  extensionList: any[] = [];
  userModel : any = {};
  constructor( private af: AngularFirestore,      private router: Router,
    private route: ActivatedRoute
    ,public authService: AuthService) { }

  
  submit(){
    this.af.collection('Users').doc(this.userId).update(this.userModel);
    this.router.navigate(['/admin/user-list']);

  }

  getExtensionList(){
    this.af.collection("extensions").snapshotChanges().subscribe((data) => {
      this.extensionList = [];
      data.map(e => {
        var y : any = e.payload.doc.data();
        y["$key"] = e.payload.doc.id;
        this.extensionList.push(y as any);
      });
      this.getUserId();
    })
  }

  ngOnInit(): void {
    this.getExtensionList();
  }

  getUserId(){
    this.userId = this.route.snapshot.params['id'];
    this.af.collection("Users").doc(this.userId).snapshotChanges().subscribe((data) => {
      var y : any = data.payload.data();
      this.userModel = (y as any);
    });
  }

  usersList(){
    this.router.navigate(['/admin/user-list']);
  }

}
