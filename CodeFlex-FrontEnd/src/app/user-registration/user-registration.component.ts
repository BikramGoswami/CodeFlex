import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../appmodel/register';
import { UserService } from '../user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  sessionUser : String = sessionStorage.getItem("userId");
  userRegistration:Register = new Register();
  form1: FormGroup;
  message:String;
  constructor(private userService: UserService,private router:Router) { }

 
  registerUser() {
    console.log(JSON.stringify(this.userRegistration));      ///////////////////////////////////////////////////////////////
    this.userService.register(this.userRegistration).subscribe(response => {
      // this.message=response;                             ////////////////////////////////////////////////////////////////////
      //   console.log(JSON.stringify(this.message));
      Swal.fire(
        response.status,
        response.message
      )
      if(response.status=="SUCCESS"){
        this.router.navigate(['user_login'])
      }
    })
  }

  ngOnInit() {
    this.form1 = new FormGroup ( 
    {
      email: new FormControl('', [Validators.required, 
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),

      password: new FormControl('', [Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')]),

      fullName: new FormControl('', [Validators.required, 
        Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$')]),
      
      mobile: new FormControl('', [Validators.required,
        Validators.pattern('^[0-9]{10}$')]),

      city: new FormControl('', [Validators.required]),

      state: new FormControl('', [Validators.required]),

      dob: new FormControl('', [Validators.required]),

      qualification: new FormControl('', [Validators.required,
       Validators.pattern('^[a-zA-Z ]*$') ]),

      yoc: new FormControl('', [Validators.required,
        Validators.pattern('^[0-9]{4}$')])
    })
  }
  logout() {
    sessionStorage.clear();
  }

}
