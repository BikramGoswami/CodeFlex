import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchStudent } from '../appmodel/search-student';
import { UserDetails } from '../appmodel/user-details';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  adminSearch(searchStudent:SearchStudent) : Observable<UserDetails[]> {
    let url = "http://localhost:8084/search_students";
   return this.http.post<UserDetails[]>(url,searchStudent); 
  }
}