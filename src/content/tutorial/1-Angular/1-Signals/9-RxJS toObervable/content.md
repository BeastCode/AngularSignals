---
type: lesson
title: Converting Signals to Observables
focus: /main.ts
---

# Converting Signals to Observables: RxJS Interop

While signals are powerful for managing state within a component, there are situations where converting a signal to an Observable can be beneficial. This allows you to leverage the rich ecosystem of RxJS operators and integrate with existing code that relies on Observables.

### Using `toObservable`

Angular provides the `toObservable` function from the `rxjs-interop` package to convert a signal to an Observable.

```typescript
import { Component, signal } from "@angular/core";
import { toObservable } from "rxjs-interop";

@Component({
  selector: "app-signal-to-observable",
  template: ``,
})
export class SignalToObservableComponent {
  count = signal(0);
  count$: Observable<number> = toObservable(this.count);
}
```

In this example:

- We create a signal `count` with an initial value of 0.
- The `toObservable` function is used to convert the `count` signal into an Observable.

### Key Points

- `toObservable` automatically subscribes to the signal.
- The resulting Observable emits the signal's value whenever it changes.
- Unsubscribing is handled automatically when the component is destroyed.

### Use Cases

- Integrating with existing RxJS pipelines.
- Sharing signal values across components or services using Observables.
- Leveraging RxJS operators for complex data transformations.

### Example: Using `toObservable` with RxJS Operators

```typescript
import { Component, signal } from "@angular/core";
import { toObservable, map } from "rxjs-interop";

@Component({
  selector: "app-signal-to-observable-advanced",
  template: ``,
})
export class SignalToObservableAdvancedComponent {
  count = signal(0);
  doubledCount$ = toObservable(this.count).pipe(map((value) => value * 2));
}
```

In this example:

- The `count` signal is converted to an Observable.
- The `map` operator is used to double the value emitted by the Observable.
- The `doubledCount$` Observable can be used to derive other values or subscribe to it in other parts of the application.

### Conclusion

By understanding how to convert signals to Observables, you can effectively leverage the strengths of both reactive programming paradigms in your Angular applications.
