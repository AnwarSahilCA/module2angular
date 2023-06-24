import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {
 
  
  @Output() public sendData1=new EventEmitter<{num1:number,cond:number}>();
  send1(){
    this.sendData1.emit({num1:10,cond:2});
  }
  @Output() public sendData2=new EventEmitter<{num1:number,num2:number,cond:number}>();
  
  send2(){
    this.sendData2.emit({num1:10,num2:15,cond:2});
  }
  

}


