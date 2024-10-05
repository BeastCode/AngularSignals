---
type: lesson
title: Create a Computed Signal
focus: /main.ts
---

# Computed Signals

Computed signals are derived from other signals. This means their value is calculated based on the values of other signals. Whenever the value of a dependent signal changes, the computed signal automatically re-calculates.

## Create a Computed Signal

Let's expand on our previous example by creating a computed signal that shows the next value of our count signal.

### Step-by-Step Instructions:

1. **Import computed:**

```typescript
import { Component, signal, computed } from "@angular/core";
```

2. **Create a computed signal:**

```typescript
nextCount = computed(() => count() + 1);
```

3. **Display the computed value:**

```typescript

<p>Count + 1: {{ nextCount() }}</p>
```

### Complete Code:

```typescript showLineNumbers add={1,9,15}
import { Component, signal, computed } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-tutorial",
  standalone: true,
  template: `
    <p>Count: {{ count() }}</p>
    <p>Count + 1: {{ nextCount() }}</p>
    <button (click)="increment()">Increment</button>
  `,
})
export class TutorialComponent {
  count = signal(0);
  nextCount = computed(() => this.count() + 1);

  increment() {
    this.count.set(this.count() + 1);
  }
}

bootstrapApplication(TutorialComponent);
```

### Explanation:

**#1** We imported the computed function from @angular/core.

**#9** Displayed the nextCount in the template.

**#15** Created a computed signal nextCount that calculates the next value of count.

### Key Points:

- Computed signals depend on other signals.
- They automatically recalculate when their dependencies change.
- They provide a clean way to derive new values from existing signals.

### Exercise:

Try creating another computed signal that checks if the count is even or odd. Display the result in the template.

By understanding computed signals, you can create more complex and reactive applications.
