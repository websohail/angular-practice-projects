import { Component } from '@angular/core';
import { Fields } from '../models/task';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-todoagain',
  templateUrl: './todoagain.component.html',
  styleUrls: ['./todoagain.component.css']
})
export class TodoagainComponent implements OnInit{

  field_one:string = "";
  field_two:Date = new Date();
  field_storage:Fields[] = [];

  ngOnInit(): void {
    let localstorageData = localStorage.getItem('localstorage_data');
    this.field_storage = localstorageData ? JSON.parse(localstorageData) : [];
  }
  add_data(){
    if(this.field_one.trim().length && this.field_two){
      let myInterfaceObject:Fields = {
        id: Date.now(),
        field1: this.field_one,
        date: this.field_two
      }
      this.field_storage.push(myInterfaceObject);
      this.field_one = "";
      this.field_two = new Date;
      localStorage.setItem('localstorage_data', JSON.stringify(this.field_storage));
    }
  }
  deleteRecord(i:number){
    this.field_storage.splice(i, 1);
    localStorage.setItem('localstorage_data', JSON.stringify(this.field_storage));
  }

}
