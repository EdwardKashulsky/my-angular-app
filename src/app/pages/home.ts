import { Component, signal } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <h1>Hom AGAIN</h1>
    <div>{{count()}}</div>
    <button (click)="handleClick()">clickMe</button>
    `,
})
export class HomeComponent {
  count = signal(0);

  handleClick() {
    console.log(this.count())
    this.count.set(this.count() + 1)
  }
}

