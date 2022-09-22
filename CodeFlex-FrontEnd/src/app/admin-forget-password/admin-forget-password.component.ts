import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../appmodel/login';
import { AdminService } from '../service/admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-forget-password',
  templateUrl: './admin-forget-password.component.html',
  styleUrls: ['./admin-forget-password.component.css']
})
export class AdminForgetPasswordComponent implements OnInit {

  form3  : FormGroup;
  login:Login=new Login();
  conPassword:String;

  constructor(private userService:UserService,private adminService: AdminService,private router:Router) { }

  ngOnInit() {
    this.form3 = new FormGroup (  
      {
        email: new FormControl('', [Validators.required, 
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        password: new FormControl('', [Validators.required, 
        Validators.pattern('/^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/')]),
        conPassword: new FormControl('', [Validators.required, 
        Validators.pattern('/^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/')])
        
      }
    )
  }

  updatePassword(){
    // sessionStorage.setItem("isAuthenticated","false");
    // if(sessionStorage.getItem("isAuthenticated")=="true")
    // {
      this.adminService.updatePassword(this.login).subscribe(response=>{
        alert(JSON.stringify(response.message));
        this.router.navigate(['admin_login']);
      });
    // }
    // else{
      // alert("You are not authenticated to update your password!\nPlease make sure you came here through the link that we sent you.");
      // this.router.navigate([''])
    // }
    // sessionStorage.removeItem("isAuthenticated");
  }

}
