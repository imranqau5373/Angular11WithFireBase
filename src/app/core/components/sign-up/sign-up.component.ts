import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from 'src/app/shared/service/auth.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupModel : any;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(signup:any){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, 'imran@im.com ', '@Password1')
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  
  }

}
