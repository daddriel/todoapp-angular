import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
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
}
