import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '../appmodel/report';
import { SearchStudent } from '../appmodel/search-student';
import { UserDetails } from '../appmodel/user-details';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent implements OnInit {
  
  public users:UserDetails[];
  searchStudent:SearchStudent = new SearchStudent();
  constructor(private searchService:SearchService, private router:Router) { }

  ngOnInit() {

  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  searchUser(){
    this.searchService.adminSearch(this.searchStudent).subscribe(data =>{this.users=data});
    console.log(this.users);
  }

 
}