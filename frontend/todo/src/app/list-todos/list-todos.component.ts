import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{

  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate: Date
    ) {

    }
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message: string

  // todos = [
  //  new Todo(1,'learn to Dance',false,new Date()),
  //  new Todo(2,'Learn to Code',false,new Date())

// ]

  constructor(
    private todoService:TodoDataService
  ) { }

  ngOnInit() {

    this.refreshTodos()
  }

  refreshTodos(){
    
    this.todoService.retrieveAllTodos('rdprassy').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }

    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('rdprassy',id).subscribe(

    response => {
      console.log(response);
      this.message = `Delete Todo successfull ${id}`
      this.refreshTodos()
    }
  )



  }

}
