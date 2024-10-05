---
type: lesson
title: Signals Inputs

focus: /main.ts
---

## Angular Signal Inputs

### Understanding Signal Inputs

Signal inputs provide a reactive way to pass data from parent to child components in Angular. They offer several advantages over traditional `@Input` decorators, including automatic change detection and a more declarative approach.

### Basic Usage

```typescript
import { Component, signal, input } from "@angular/core";

@Component({
  selector: "app-child",
  template: `<p>Value: {{ value() }}</p> `,
})
export class ChildComponent {
  value = input<number>();
}

@Component({
  selector: "app-parent",
  template: ` <app-child [value]="count()"></app-child> `,
})
export class ParentComponent {
  count = signal(10);
}
```

### Key Points

- The `input` function is used to define an input property.
- The generic type `number` specifies the expected type of the input.
- The parent component passes the `count` signal to the child component using property binding.

### Optional and Required Inputs

By default, signal inputs are optional. To make an input required, use the `input.required` function:

```typescript
value = input.required<number>();
```

### Input Aliasing

You can use the `alias` option to provide a different name for the input property in the child component:

```typescript
value = input<number>({ alias: "customValue" });
```

### Using Signal Inputs with Computed Signals

You can create computed signals based on input signals:

```typescript
doubledValue = computed(() => this.value() * 2);
```

### Benefits of Signal Inputs

- Automatic change detection: When the input value changes, the child component is automatically updated.
- Declarative style: Signal inputs promote a more declarative approach to component communication.
- Type safety: Improved type checking and error prevention.

### Additional Considerations

- While signal inputs are powerful, it's essential to use them judiciously.
- For simple data passing, traditional `@Input` might still be suitable.
- Consider using `effect` for more complex scenarios involving input changes.
