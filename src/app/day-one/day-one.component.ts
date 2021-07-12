import { Component, OnInit,VERSION } from '@angular/core';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.css']
})
export class DayOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  name2 = 'Angular' + VERSION.major;
  // expression
  user = {
    name : 'Chau',
    age: 24
  }
  // Data binding : Lay du lieu tu component de hien thi ra template

  // Event binding : Lay du lieu tu template de truyen vao component thong qua cac event 
  // (NOTE : Data binding se su dung ngoac vuong,Event binding su dung ngaoc tron)
  inputType = 'text';
  onSubmit(){
    alert('on click submit');
  }
  // 2 way data binding : ket hop giua data binding va event binding
}
