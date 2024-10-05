import { Component, signal } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { toSignal } from "@angular/core/rxjs-interop";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-tutorial",
  standalone: true,
  template: `<p>Value: {{ observableAsSignal() }}</p>`,
})
export class TutorialComponent {
  observable$: Observable<number> = of(10);
  observableAsSignal = toSignal(this.observable$);
}

bootstrapApplication(TutorialComponent);
