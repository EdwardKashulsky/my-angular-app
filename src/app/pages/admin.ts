import { Component, signal } from '@angular/core';

@Component({
  selector: 'admin',
  template: `
    <h1>admin</h1>
    <div>{{count()}}</div>
    <button (click)="handleClick()">clickMe</button>
    `,
})
export class AdminComponent {
  count = signal(0);

  handleClick() {
    console.log(this.count())
    this.count.set(this.count() + 1)
  }
}

