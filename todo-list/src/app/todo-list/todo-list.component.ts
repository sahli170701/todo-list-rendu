import { Component, OnInit } from '@angular/core';
import { faTrash, faList, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../service-name.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
faTrash =faTrash
faList = faList
faPenToSquare = faPenToSquare

todoList!:Todo[]
constructor (public todoService : TodoService){}
ngOnInit(): void {
  this.todoService.getTodoList().subscribe(
    response => this.todoList=response
  )
}

deleteTodo(todo:Todo){

  this.todoService.deleteTodo(todo).subscribe(
    response=>{
      this.todoList=response
      this.ngOnInit()
    }
  )
}

selectedTodo!:Todo
selectTodo(todo:Todo){
  this.todoService.todoDetailShowModal=true
  this.todoService.getTodoById(todo).subscribe(
    response=>this.selectedTodo=response
  )
}


}