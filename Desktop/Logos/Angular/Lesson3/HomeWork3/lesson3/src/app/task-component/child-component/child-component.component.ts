import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent {
  public name!:string;
  // public count!:number;

  constructor(){}
@Output() addTask = new EventEmitter<string>();
@Input() count!:number;

addName(name:string): void{
this.addTask.emit(name);
    this.name = '';
  }
}
