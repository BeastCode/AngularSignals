import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-tutorial",
  standalone: true,
  template: `<h2>Loading Tutorial</h2> `,
})
export class CookieRecipe {}

bootstrapApplication(CookieRecipe);
