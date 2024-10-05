import { Component, signal, computed } from "@angular/core";
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
      <li *ngFor="let product of products()">
        {{ product.name }} - Quantity: {{ product.quantity }} - Price:
        {{ product.price * product.quantity }}
        <button (click)="incrementQuantity(product.id)">+</button>
        <button (click)="removeItem(product.id)">Delete</button>
      </li>
    </ul>
    <p>Total: {{ total() }}</p>
  `,
})
export class TutorialComponent {
  products = signal<Product[]>([
    { id: 1, name: "Product A", price: 10, quantity: 2 },
    { id: 2, name: "Product B", price: 20, quantity: 1 },
  ]);

  total = computed(() => {
    return this.products().reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  });

  incrementQuantity(productId: number) {
    this.products.update((products) =>
      products.map((p) =>
        p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  }

  removeItem(productId: number) {
    this.products.update((products) =>
      products.filter((p) => p.id !== productId)
    );
  }
}

bootstrapApplication(TutorialComponent);
