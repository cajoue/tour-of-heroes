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
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    </div>
  </div>
  `,
  styles: [`
  .selected {
    background-color: #cfd8dc !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #eee;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #bbd8dc !important;
    color: white;
  }
  .heroes li:hover {
    color: #607d8b;
    background-color: #ddd;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #6078db;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
