import { Component } from '@angular/core';
import { Taskmodel } from '../models/taskmodel';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  taskTitle:string = '';
  taskAssignee:string = '';
  taskDate:Date = new Date();
  taskList:Taskmodel[] = [];

  ngOnInit(): void {
    let savedTaskList = localStorage.getItem('tasklist');
    this.taskList = savedTaskList ? JSON.parse(savedTaskList) : [];
  }

  addTask(){
    if(this.taskTitle.trim().length && this.taskAssignee.trim().length && this.taskDate){
      let taskObject:Taskmodel = {
        id: Date.now(),
        Title: this.taskTitle,
        Assignee: this.taskAssignee,
        date: this.taskDate
      }
      this.taskList.push(taskObject);
      this.taskTitle = '';
      this.taskAssignee = '';
      this.taskDate = new Date();
      localStorage.setItem('tasklist', JSON.stringify(this.taskList));
    }
  }

  deleteRecord(index:number){
    this.taskList.splice(index,1);
    localStorage.setItem('tasklist', JSON.stringify(this.taskList));
  }


}
