import { Component } from '@angular/core';
import { IPerson } from './models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  withImg = 10;
  name = 'Yasniel Fajardo';
  age = 27;
  img =
    'https://angular.io/generated/images/marketing/home/responsive-framework.svg';
  btnDisabled = true;
  persons: IPerson[] = [
    { id: 1, name: 'Yasniel' },
    { id: 2, name: 'Mario' },
    { id: 3, name: 'Pepe' },
    { id: 4, name: 'Juanito' },
    { id: 5, name: 'Yarita' },
    { id: 6, name: 'Marela' },
    { id: 7, name: 'Yusimi' },
  ];
  newName = '';
  switchValue = '';

  box = {
    width: 40,
    height: 40,
    background: 'red',
  };

  register = {
    username: '',
    password: '',
    email: '',
  };

  onChangeName(event: Event) {
    const element = event.target as HTMLInputElement;
    console.log(JSON.stringify(element.value));
    this.name = element.value;
  }

  increaseAge() {
    this.age += 1;
  }

  resetAge() {
    this.age = 0;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(JSON.stringify(element.scrollTop));
  }

  deletePerson(i: number) {
    this.persons = this.persons.filter((_, index) => index !== i);
  }

  addPerson() {
    this.persons.push({ id: this.persons.length + 1, name: this.newName });
    this.newName = '';
  }

  onRegister() {
    console.log(this.register);
  }
}
