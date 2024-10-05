import { Component, signal, effect } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-tutorial",
  standalone: true,
  template: `
    <p>Count: {{ count() }}</p>
    <button (click)="incrementWithSet()">Increment with set</button>
    <button (click)="incrementWithUpdate()">Increment with update</button>
  `,
})
export class TutorialComponent {
  count = signal(0);

  incrementWithSet() {
    this.count.set(this.count() + 1);
  }

  incrementWithUpdate() {
    this.count.update((prevCount) => prevCount + 1);
  }

  effect = effect(() => {
    console.log("Count changed:", this.count());
  });
}

bootstrapApplication(TutorialComponent);
