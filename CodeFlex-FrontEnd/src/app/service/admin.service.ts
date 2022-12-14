import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../appmodel/login';
import { Question } from '../appmodel/question';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient) { }

  addquestion(addquestion: Question) : Observable<any> {
    let url = "http://localhost:8084/add_question";
    return this.http.post(url, addquestion);
  }

  removequestion(questionid: number): Observable<any>{
    let url = "http://localhost:8084/remove_question/"+questionid;
   return this.http.delete(url); 
  }

  login(login:Login):Observable<any> {
    let url="http://localhost:8084/admin_login";
    return this.http.post(url, login);
  }

  forgetPassword(email:String): Observable<any> {
    let url="http://localhost:8084/admin_forgot_password/"+email;
    return this.http.get(url,{responseType: 'text'});
  }

  updatePassword(login:Login):Observable<any>{
    let url = "http://localhost:8084/updateAdminPassword";
    return this.http.post(url, login);  
  }

}
