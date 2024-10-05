---
type: lesson
title: Two-Way Binding

focus: /main.ts
---

# Advanced Signal Inputs: Two-Way Binding and Complex Data Structures

### Two-Way Binding with Signal Inputs

While Angular doesn't have built-in two-way binding for signals like it does with `[(ngModel)]`, we can achieve a similar behavior by combining signal inputs, outputs, and effects.

```typescript
import { Component, signal, input, output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  template: ` <input type="text" [(ngModel)]="value.value" /> `,
})
export class ChildComponent {
  @input() value = input<string>("");
  @output() valueChange = new EventEmitter<string>();

  ngOnInit() {
    this.value.subscribe((value) => this.valueChange.emit(value));
  }
}

@Component({
  selector: "app-parent",
  template: `
    <app-child
      [value]="parentValue"
      (valueChange)="parentValue.set($event)"
    ></app-child>
  `,
})
export class ParentComponent {
  parentValue = signal("");
}
```

In this example:

- The `ChildComponent` has a signal input `value` and an output `valueChange`.
- The `ngOnInit` lifecycle hook subscribes to the `value` signal and emits its changes to the `valueChange` output.
- The `ParentComponent` binds the `parentValue` signal to the child component's `value` input and handles the `valueChange` event by updating the `parentValue` signal.

### Complex Data Structures as Inputs

Signal inputs can handle complex data structures, such as objects or arrays.

```typescript
interface User {
  name: string;
  age: number;
}

@Component({
  selector: "app-child",
  template: `
    <p>Name: {{ user.value.name }}</p>
    <p>Age: {{ user.value.age }}</p>
  `,
})
export class ChildComponent {
  user = input<User>({ initialValue: { name: "", age: 0 } });
}
```

In this example, the `user` input is of type `User`, allowing you to pass complex object data from the parent component.

### Additional Considerations

- **Performance:** For large data structures, consider using immutable updates or change detection strategies to optimize performance.
- **Error Handling:** Implement error handling mechanisms for signal inputs to gracefully handle unexpected values.
- **Best Practices:** Follow Angular style guidelines and component communication best practices when using signal inputs.

By understanding these advanced concepts, you can effectively leverage signal inputs for building complex and interactive Angular applications.
