import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-tutorial",
  standalone: true,
  template: `
    <h1>Math Class Analogy</h1>
    <p>x = 5</p>
    <p>y = x * x</p>
    <p>x = {{ x }}</p>
    <p>What is y? {{ y }}</p>
  `,
})
export class TutorialComponent {
  x = 5;
  y = this.x * this.x;

  constructor() {
    this.x = 9;
  }
}

bootstrapApplication(TutorialComponent);
