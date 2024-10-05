---
type: lesson
title: Set vs Update Signals
focus: /main.ts
---

# When to use set and update

In the previous lessons we used the set method, but Angular signals provide two primary methods to modify their values: set and update. While they might seem similar, they serve distinct purposes.

## set

- **Direct value assignment:** Replaces the entire signal value with a new one.
- **Usage:** When you want to completely overwrite the signal's value without considering the previous state.

```typescript
count.set(10); // Sets the count to 10, regardless of its previous value
```

## update

- **Value modification based on current value:** Takes a callback function that receives the current signal value and returns a new value.
- **Usage:** If that new value is based on the previous one, use **update()** instead of **set()**.

```typescript
count.update((prevCount) => prevCount + 1); // Increments the count by 1
```

## Key Differences

Feature set update
Directness Direct value assignment Indirect value assignment (callback)
Previous value Ignores previous value Accesses previous value
Concurrency Less suitable for concurrent updates Better suited for concurrent updates

### When to Use Which

- **Use set:** When you want to replace the entire signal value with a new, unrelated value.
- **Use update:** When you want to modify the signal's value based on its current state, especially in concurrent scenarios or when performing calculations.

## In Summary

While both methods modify signal values, **update** offers more flexibility and control, making it generally preferred for complex state management. However, **set** can be simpler for straightforward value assignments.

### Example

```typescript
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <p>Count: {{ count() }}</p>
    <button (click)="incrementWithSet()">Increment with set</button>
    <button (click)="incrementWithUpdate()">Increment with update</button>
  `,
})
export class CounterComponent {
  count = signal(0);

  incrementWithSet() {
    this.count.set(this.count() + 1);
  }

  incrementWithUpdate() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
```

In this example, both **incrementWithSet** and **incrementWithUpdate** achieve the same result. However, for more complex scenarios, update offers advantages in terms of concurrency and state management.

```

```
