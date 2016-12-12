import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router }   from '@angular/router';
import 'rxjs/rx';

import { Staff } from '../staff';

@Component({
  selector: 'staff-list-component',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  constructor(
    private http: Http,
    private router : Router
  ) { }

  staffList: Staff[];
  selectedEmpl: Staff;

  ngOnInit() {
     this.getStaff();
  }
  
  getStaff(){
    this.http.get("http://localhost:57026/api/staff/getstaff")
    .map(res => res.json())
    .subscribe((staff) => {
      this.staffList = staff;     
    })
  }

  onSelect(person: Staff): void {
    this.selectedEmpl = person;
    this.router.navigate(['/employee', this.selectedEmpl.Id]);
  }
  
}
