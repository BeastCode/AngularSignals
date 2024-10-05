import { Component, signal, input } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-child",
  standalone: true,
  template: ` <p>Value: {{ value() }}</p> `,
})
export class ChildComponent {
  value = input<number>();
}

@Component({
  selector: "app-tutorial",
  standalone: true,
  imports: [ChildComponent],
  template: `
    <p>Parent: {{ count() }}</p>
    <app-child [value]="count()"></app-child>
    <button (click)="increment()">Increment count</button>
  `,
})
export class ParentComponent {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }
}

bootstrapApplication(ParentComponent);
