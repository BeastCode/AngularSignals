---
type: lesson
title: The Power of Signals in Complex Applications
focus: /main.ts
---

# The Power of Signals in Complex Applications

### Understanding the Limitations of Regular Variables

While regular variables are sufficient for simple calculations, their shortcomings become apparent in larger, more complex applications. Let's illustrate this with a familiar analogy:

### The Math Class Analogy

Imagine a math class where you calculate the square of a number.

```typescript
x = 5;
y = x * x;
x = 9;

// What is y?
```

A math student would likely answer that if x becomes 9, then y should be 81. However, in traditional programming without signals, y would remain 25 unless explicitly recalculated. This behavior can lead to unexpected results and errors in more complex scenarios.

### The Power of Signals

Signals address this limitation by establishing a reactive relationship between values.

```typescript
import { signal, computed } from "@angular/core";

const x = signal(5);
const y = computed(() => this.x() * this.x());
this.x.set(9);

// What is y?
```

In this example

x is a signal holding the value 5.
y is a computed signal that automatically calculates the square of x.
Whenever x changes, y is automatically updated.
If we change x to 9, y will immediately reflect the change as 81.

### Real-World Implications

In larger Angular applications, components often interact with each other, sharing data and influencing the UI. Without signals, managing these interactions can become complex and error-prone. Signals provide a more elegant and efficient solution.

### Consider a shopping cart application

Product prices are stored in signals.
The total price is a computed signal based on the quantities and prices of products.
When a product quantity changes, the total price is automatically updated without manual intervention.
Key Benefits of Signals
Automatic updates: Signals ensure that derived values are always in sync with their dependencies.
Improved performance: By minimizing unnecessary calculations, signals contribute to better application performance.
Enhanced code readability: The declarative nature of signals often leads to cleaner and more maintainable code.
Simplified state management: Signals provide a structured approach to managing complex application state.
By understanding the limitations of regular variables and the advantages of signals, you can build more robust and maintainable Angular applications.

### Exercise

Update the example to use signals
