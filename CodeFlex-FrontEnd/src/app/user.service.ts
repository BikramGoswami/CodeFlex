import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './appmodel/login';
import { Register } from './appmodel/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8084/login";
   return this.http.post(url, login); 
  }

  register(register: Register) : Observable<any> {
    let url = "http://localhost:8084/register";
    return this.http.post(url, register );
  }

  updatePassword(login:Login):Observable<any>{
    let url = "http://localhost:8084/updatePassword";
    return this.http.post(url, login);  
  }

  forgetPassword(email:String): Observable<any> {
    let url="http://localhost:8084/forgot_password/"+email;
    return this.http.get(url,{responseType: 'text'});
  }


}
