import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PCA2';
  number1:number=0;
  numcheck1:number=0;
  number2:number=0;
  numcheck2:number=0;
  condition:number=0;
  cond:number=0;
  




  sum=0;
  value=0;

  meth(eventData:{num1:number,num2:number,cond:number}){
    const numcheck1=eventData.num1;
      const numcheck2=eventData.num2;
      const cond=eventData.cond;


   

    
    if(eventData.cond===1){
      this.value=eventData.num1+eventData.num2;

    }
    if(eventData.cond===2){
      this.value=eventData.num1-eventData.num2;
    }
    if(eventData.cond===3){
      this.value=eventData.num1*eventData.num2;
    }
    if(eventData.cond===4){
      this.value=eventData.num1/eventData.num2;
    }
    

  }
  meth2(eventData:{num1:number,cond:number}){
    switch(eventData.cond){
      case 1 :{
            for(let i=1;i<=eventData.num1;i++){
              this.value*=i;
            }
            break;
      }
      case 2:{
        let l1=0;
        let l2=1;
        for(let i=1;i<=eventData.num1;i++){
          this.value=l1+l2;
          l1=l2;
          l2=this.value;

        }
        break;
      }
    }
  }


}
