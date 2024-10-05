---
type: lesson
title: Using Effects
focus: /main.ts
---

# Understanding and Using Effects in Angular Signals

### What are Effects?

In Angular, effects are functions that run in response to changes in signals. They are used for performing side effects, such as:

- Fetching data
- Logging events
- Updating the DOM (directly or indirectly)
- Interacting with external systems

### Creating an Effect

To create an effect, use the `effect` function from `@angular/core`.

```typescript
import { Component, signal, effect } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `<p>Count: {{ count() }}</p> `,
})
export class CounterComponent {
  count = signal(0);

  effect = effect(() => {
    console.log("Count changed:", this.count());
  });
}
```

In this example, whenever the `count` signal changes, the console will log the new value. You can try it in the example to the right, open the console, to verify that the value is logged.

### Key Points about Effects:

- They are executed asynchronously.
- They can be used to create complex reactive systems.
- They can be cleaned up using the `cleanup` function.

### Example: Fetching Data with Effects

```typescript
import { Component, signal, effect } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-data-fetch",
  template: `
    <div *ngIf="isLoading()">Loading...</div>
    <div *ngIf="error">Error: {{ error }}</div>
    <ul *ngIf="data()">
      <li *ngFor="let item of data()">
        {{ item }}
      </li>
    </ul>
  `,
})
export class DataFetchComponent {
  isLoading = signal(true);
  error = signal<string | null>(null);
  data = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  effect = effect(() => {
    this.http.get("/api/data").subscribe({
      next: (data) => {
        this.data.set(data);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.error.set(error.message);
        this.isLoading.set(false);
      },
    });
  });
}
```

In this example, an effect is used to fetch data and update the component's state based on the result.

### Best Practices:

- Use effects judiciously to avoid performance issues.
- Keep effects as pure as possible to enhance testability.
- Consider using debounce or throttle for frequently changing signals.

By understanding and effectively using effects, you can build more complex and interactive Angular applications.

**Would you like to explore more advanced use cases for effects or dive deeper into a specific aspect?**
