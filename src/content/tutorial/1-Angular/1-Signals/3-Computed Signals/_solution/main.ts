import { Component, signal, computed } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-tutorial",
  standalone: true,
  template: `
    <p>Count: {{ count() }}</p>
    <p>Count + 1: {{ nextCount() }}</p>
    <button (click)="increment()">Increment</button>
  `,
})
export class TutorialComponent {
  count = signal(0);
  nextCount = computed(() => this.count() * 2);

  increment() {
    this.count.set(this.count() + 1);
  }
}

bootstrapApplication(TutorialComponent);
