import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/rx';

import { Staff } from '../staff';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.css']
})
export class StaffDetailComponent implements OnInit {

  constructor(
        private route: ActivatedRoute,
        private router : Router,
        private http: Http
  ) { }
  
  employee: Staff;
  
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let Id = +params['id'];
      this.getEmployee(Id);

    }) 
  }
    getEmployee(Id : number){
    this.http.get("http://localhost:57026/api/staff/"+ Id)
    .map(res => res.json())
    .subscribe((staff) => {
      this.employee = staff;   
    })
  }
      
    
}




