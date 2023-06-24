import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
name:String|undefined
n:number|undefined
selectedtime:Date|undefined

display() {
console.log(this.name)
console.log(this.n)
console.log(this.selectedtime)
  
}

}
