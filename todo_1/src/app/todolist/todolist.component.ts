import { Component } from '@angular/core';
import { Task } from '../models/task';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{
  newTask: string = "";
  newTaskAssignee: string = "";
  newTaskDate: Date = new Date();
  alltasks: Task[] = [];

  ngOnInit(): void {
    let getTask = localStorage.getItem("toDoTasks");
    this.alltasks = getTask ? JSON.parse(getTask) : [];
  }

  addTask(){
    if(this.newTask.trim().length && this.newTaskAssignee.trim().length && this.newTaskDate){
      let myTask : Task = {
        id: Date.now(),
        task: this.newTask,
        assignee: this.newTaskAssignee,
        date: this.newTaskDate
      }
      this.alltasks.push(myTask);
      this.newTask = "";
      this.newTaskAssignee = "";
      this.newTaskDate = new Date();
      localStorage.setItem("toDoTasks", JSON.stringify(this.alltasks));
    }
  }
  deleteTask(i:number){
    this.alltasks.splice(i, 1);
    localStorage.setItem("toDoTasks", JSON.stringify(this.alltasks));
  }

}

