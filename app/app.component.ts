import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Ava' },
  { id: 12, name: 'Rey' },
  { id: 13, name: 'Oti Mabusi' },
  { id: 14, name: 'Nadiya Hussein' },
  { id: 15, name: 'Liz Lemon' },
  { id: 16, name: 'Leslie Knope' },
  { id: 17, name: 'Dawn French' },
  { id: 18, name: 'Jennifer Saunders' },
  { id: 19, name: 'Judi Dench' },
  { id: 20, name: 'Kate McKinnon' }
];

// The (*) prefix to ngFor indicates that the <li> element and its children constitute a master template.
// The ngFor directive iterates over the heroes array returned by the AppComponent.heroes property and stamps out instances of this template.

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul>
      <li *ngFor="let hero of heroes">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `
})

export class AppComponent  {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;
}
