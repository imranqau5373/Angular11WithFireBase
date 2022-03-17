import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel : any = {};
  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }

  submit($login:any){
 
  }

}
