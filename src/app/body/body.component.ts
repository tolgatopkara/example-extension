import { Component } from '@angular/core';
import { GaugeComponent } from "../gauge/gauge.component";

@Component({
    standalone: true,
    selector: 'app-body',
    template: `<div class="w-120 h-68 bg-sky-300">
  <app-gauge></app-gauge>

</div>

 `,
    imports: [GaugeComponent]
})
export class BodyComponent {

}
