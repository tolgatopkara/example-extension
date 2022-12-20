import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <app-header></app-header>
    <app-body ></app-body>
  `,
    imports: [HeaderComponent, BodyComponent]
})
export class AppComponent {
  title = 'example-extention';
}
