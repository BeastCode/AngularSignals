---
type: lesson
title: Create a Writable Signal
focus: /main.ts
---

# Writable Signal

## There are two types of signals

- Writable Signal
- Computable Signal

In this first lessions, we'll focus on writable signals. A writable signal is a signal whose value can be changed after its creation. But lets start with an example that doesn't use signals and convert it step by step to use signals.

## Angular Component without signals

```typescript
import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-tutorial",
  standalone: true,
  template: `
    <p>Count: {{ count }}</p>
    <button (click)="increment()">Increment</button>
  `,
})
export class TutorialComponent {
  count = 0;

  increment() {
    this.count = this.count + 1;
  }
}

bootstrapApplication(TutorialComponent);
```

### Explanation:

- **Component Class:** The TutorialComponent class holds the count property as a regular number. TypeScript will infer the type based on the value assigned to it, in this case a number.
- **Template:** The template directly accesses the count property using interpolation: {{}}.
- **Increment Function:** The increment function updates the count property directly.

## Create a Writable Signals

Now, let's convert this component to use signals:

### Step-by-Step Guide

1. **Import the** **_signal_** **function**

It's part of the @angular/core library:

```typescript
import { Component, signal } from "@angular/core";
```

2. **Create a signal**

Replace the count property with a signal:

```typescript
count = signal(0);
```

3. **Update the template**

Modify the template to access the signal's value using the () operator:

```typescript
<p>Count: {{ count() }}</p>
```

4. **Modify the increment function**

Use signal.set to update the signal's value:

```typescript
increment() {
  this.count.set(this.count() + 1);
}
```

### The Final Code with Signals:

```typescript showLineNumbers add={1,8,13,16}
import { Component, signal } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-tutorial",
  standalone: true,
  template: `
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">Increment</button>
  `,
})
export class TutorialComponent {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }
}

bootstrapApplication(TutorialComponent);
```

### Explanation of Changes:

**1** We imported the signal function from @angular/core.

**8** Updated the template to use count() instead of count.

**13** Replaced the count property with a signal initialized with the value 0.

**16** Modified the increment function to use signal.set to update the signal's value.

By following these steps, you've successfully converted a component using traditional state management to one that leverages the power of signals.

**_If you didn't type it in correctly, you can click the Solve button in the upper right corner, to see the final version of the code_**
