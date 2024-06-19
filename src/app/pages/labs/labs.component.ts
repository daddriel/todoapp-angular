import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  title = 'angular-hello-world';
  welcome = 'hola';
  tasks = signal([
    'install Angular CLI',
    'create new app',
    'create components',
    'serve app',
  ]);
  name = signal('John Doe');
  age = 5;
  disabled = true;
  prueba = 'prueba';
  img =
    'https://th.bing.com/th/id/OIP.Klh1l7wkoG6PDPb9A5oCHQAAAA?rs=1&pid=ImgDetMain';

  person = signal({
    name: 'david',
    age: 25,
    avatar:
      'https://th.bing.com/th/id/OIP.w6bNtPmSNRq92asayYeNqgHaHa?rs=1&pid=ImgDetMain',
  });

  clickHandler() {
    alert('Button was clicked!');
  }

  changeHandler(event: Event) {
    console.log(event);
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }
  changeName(event: Event) {
    console.log(event);
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState)=>{
      return{
        ...prevState,
        name: newValue,
      }
    });
  }
  changeAge(event: Event) {
    console.log(event);
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState)=>{
      return{
        ...prevState,
        age: parseInt(newValue),
      }
    });
  }
  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  colorControl = new FormControl();
  widthControl = new FormControl(50,{
    nonNullable: true
  });

  nameControl = new FormControl(50,{
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });
  constructor(){
    this.colorControl.valueChanges.subscribe(value =>{
      console.log(value)
    })
  }
}
