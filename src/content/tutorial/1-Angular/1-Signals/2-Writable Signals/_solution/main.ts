import { Component, signal } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-tutorial",
  standalone: true,
  template: `
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">Increment</button>
  `,
})
export class TutorialComponent {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }
}

bootstrapApplication(TutorialComponent);
