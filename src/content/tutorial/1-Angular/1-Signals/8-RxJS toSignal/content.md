---
type: lesson
title: Converting Observables to Signals
focus: /main.ts
---

### Angular Signals and RxJS Interop

### Understanding the Integration

Angular signals and RxJS, both reactive programming libraries, offer powerful tools for managing asynchronous data and state in applications. Interoperability between the two is essential for effective development.

### Converting Observables to Signals

Angular provides the `toSignal` function to convert an Observable into a signal.

```typescript
import { Component, signal } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-rxjs-interop",
  template: ` <p>Value: {{ observableAsSignal() }}</p> `,
})
export class RxjsInteropComponent {
  observable$: Observable<number> = of(10);
  observableAsSignal = toSignal(this.observable$);
}
```

In this example:

- An Observable emitting the value 10 is created.
- `toSignal` is used to convert the Observable into a signal.
- The signal's value can be accessed in the template using `{{ observableAsSignal() }}`.

### Key Points

- `toSignal` automatically subscribes to the Observable.
- The signal updates its value whenever the Observable emits a new value.
- Unsubscribing is handled automatically when the component is destroyed.

### Additional Considerations

- **Initial Value:** You can provide an initial value for the signal using the `initialValue` option in `toSignal`.
- **Error Handling:** Handle errors using the `onError` callback in the `toSignal` options.
- **Completing Observables:** The signal will emit `undefined` when the Observable completes.

### Beyond Basic Conversion

You can combine signals with RxJS operators to create complex reactive logic.

```typescript
import { Component, signal, effect } from "@angular/core";
import { Observable, of, interval, map } from "rxjs";

@Component({
  selector: "app-rxjs-interop-advanced",
  template: ` <p>Counter: {{ counter() }}</p> `,
})
export class RxjsInteropAdvancedComponent {
  counter = signal(0);

  effect = effect(() => {
    interval(1000)
      .pipe(map((value) => value + 1))
      .subscribe((value) => this.counter.set(value));
  });
}
```

In this example:

- An effect is used to create an Observable that emits increasing numbers every second.
- The `map` operator is used to transform the values.
- The resulting values are set to the `counter` signal.

### Conclusion

By effectively combining signals and RxJS, you can create powerful and reactive applications. Understanding the interoperability between these two paradigms is crucial for building complex and efficient solutions.

**Would you like to explore more advanced scenarios or dive deeper into specific use cases?**
