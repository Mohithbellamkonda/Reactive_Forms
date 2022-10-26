import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.css']
})
export class ReactiveFormComponentComponent {



  submit(login: any){
    console.log("form submitted",login)
  }




}



