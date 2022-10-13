import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }

  name=""
  collegename=""
  parentname=""
  dob=""
  adress=""
  mobilenum=""
  parntnum=""
  email=""
  blood=""


  readValues=()=>{
    let data={
      "name":this.name,
      "collegename":this.collegename,
      "parentname":this.collegename,
      "dob":this.dob,
      "adress":this.adress,
      "mobilenum":this.mobilenum,
      "parntnum":this.parntnum,
      "email":this.email,
      "blood":this.blood
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
