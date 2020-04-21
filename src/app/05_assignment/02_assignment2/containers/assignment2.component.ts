import { Component } from '@angular/core';
import { AssignmentComponent, Todo } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  
  todoList:Todo[]
  constructor(private assignmentComponent:AssignmentComponent){}

  ngOnInit(){
    this.todoList = this.assignmentComponent.todos
    console.log(this.todoList)
  }

  AddClass(event){
    event.target.parentNode.className = "active"
  }

  CreateTableContent(data:string) : HTMLTableDataCellElement{
    let tag = document.createElement('td')
    tag.textContent = data
    return tag
  }

}
