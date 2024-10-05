---
type: lesson
title: Signal Types
focus: /main.ts
---

# Signal Types

In this lession you'll learn the differnce between Type Inference and Explicitly Typed Signals.

## Type Inference

TypeScript is capable of automatically determining the type of a variable based on its initial value. This is known as **type inference**.

```typescript
import { signal } from "@angular/core";

const count = signal(0); // Inferred type: number
const name = signal("John Doe"); // Inferred type: string
const isLoading = signal(false); // Inferred type: boolean
```

In these examples, the type of the signal is inferred based on the initial value.

## Explicit Typing

While TypeScript is quite good at type inference, there are times when explicitly defining the type is beneficial:

```typescript
import { signal } from "@angular/core";

const count: signal<number> = signal(0);
const name: signal<string> = signal("John Doe");
const isLoading: signal<boolean> = signal(false);
```

## Why Use Explicit Type Definitions?

- **Clarity**: Explicitly defining the type improves code readability and maintainability.
- **Type Safety**: The compiler can perform type checks, preventing potential errors.
- **Documentation**: Clearly communicates the expected data type to other developers.

## Complex Types

Signals can hold complex data structures as well:

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
}

const products: signal<Product[]> = signal([]);
```

## Key Points

- The signal<> syntax creates a reactive variable.
- The generic type parameter specifies the data type of the signal.
- Explicit type definitions can improve code clarity. But you don't have to use it all the time, for a simple types, it's often better to just write: const count = signal(0);
- Signals can hold various data types, including complex objects and arrays.

By understanding signal types, you can effectively model your application's state and improve code quality.

# Exercise - Can you fix the code?

Click Toggle Terminal to see the errors!

```typescript showLineNumbers del={1, 18, 25, 29, 34, 42, 50}
import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { NgFor } from "@angular/common";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: "app-tutorial",
  standalone: true,
  imports: [NgFor],
  template: `
    <ul>
      <li *ngFor="let product of products">
        {{ product.name }} - Quantity: {{ product.quantity }} - Price:
        {{ product.price * product.quantity }}
        <button (click)="incrementQuantity(product.id)">+</button>
        <button (click)="removeItem(product.id)">Delete</button>
      </li>
    </ul>
    <p>Total: {{ total }}</p>
  `,
})
export class TutorialComponent {
  products = [
    { id: 1, name: "Product A", price: 10, quantity: 2 },
    { id: 2, name: "Product B", price: 20, quantity: 1 },
  ];

  total = () => {
    return this.products().reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  incrementQuantity(productId: number) {
    this.products.set((products) =>
      products.map((p) =>
        p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  }

  removeItem(productId: number) {
    this.products.set((products) => products.filter((p) => p.id !== productId));
  }
}

bootstrapApplication(TutorialComponent);
```

## Hints

This code demonstrates a shopping cart component using Angular signals to manage product data and calculate the total price. Let's break down the key aspects related to signals:

### #1. Update Imports:

- signal and computed are imported from @angular/core to work with signals.

### #18,25 Update varibles in templete to Signals

### #29. Update products Signal:

- Declared as signal<Product[]>.
  signal: This is the function used to create a signal.
  <Product[]>: This specifies the type of data the signal will hold - an array of Product objects.
  Initialized with an array containing two products.

### #34. Update total to be a Computed Signal:

### Defined using computed(() => { ... }).

Calculates the total price by iterating through the products() using reduce and summing the product prices multiplied by their quantities.

### #42. incrementQuantity Function:

Takes a productId as input.
Uses update on the products signal:
The update function takes a callback that receives the current state of the products array.
Inside the callback, the map function iterates through each product.
If the product's id matches the provided productId, a new object is created with the quantity incremented by 1 (...p, quantity: p.quantity + 1).
Otherwise, the original product object remains unchanged (p).
This effectively updates the quantity of the specific product in the products signal.

### #50. removeItem Function:

Takes a productId as input.
Uses update on the products signal:
Similar to incrementQuantity, the update function with a callback is used.
The filter function iterates through each product.
Products with ids that don't match the provided productId are included in the filtered array.
This essentially removes the product with the matching id from the products signal.
Key Takeaways:

Signals provide a reactive way to store and manage data in your component.
update function allows for modifying the signal value based on its current state.
Computed signals can be derived from other signals based on calculations.
This code demonstrates how signals can be used to create interactive features like updating product quantities and calculating totals.
