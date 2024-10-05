import { Component, signal, computed } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-tutorial",
  standalone: true,
  template: `
    <h1>Math Class Analogy with Signals</h1>
    <p>x = 5</p>
    <p>y = x * x</p>
    <p>x = {{ x() }}</p>
    <p>What is y? {{ y() }}</p>
  `,
})
export class TutorialComponent {
  x = signal(5);
  y = computed(() => this.x() * this.x());

  constructor() {
    this.x.set(9);
  }
}

bootstrapApplication(TutorialComponent);
