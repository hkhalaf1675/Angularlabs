import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  names:string[] = [];

  AddName(name:any){
    this.names.push(name.value);
  }

  DeleteName(i:number){
    this.names.splice(i)
  }
}
