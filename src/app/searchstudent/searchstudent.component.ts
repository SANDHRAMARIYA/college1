import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {

  constructor() { }


  name=""

  readValues=()=>{
    let data={
      "name":this.name
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
