import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { GaugeComponent } from "../gauge/gauge.component";

@Component({
  standalone: true,
  selector: 'app-body',
  template: `

    <div #screen  class=" w-120 h-68 bg-zinc-900">
  <app-gauge  #gauge></app-gauge>
</div>
<div class="hidden w-120 h-68" id="download">
     <img #canvas />
     <a #downloadLink></a>
</div>
<button (click)="downloadImage()" >download</button>


 `,
  imports: [GaugeComponent,]
})
export class BodyComponent {

  @ViewChild('gauge') gauge!: GaugeComponent;
  @ViewChild('screen') screen!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;



  downloadImage() {
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/jpeg', 1.0);
      this.downloadLink.nativeElement.download = (`${this.gauge.gaugeValue}x${this.gauge.gaugeValue2}`);
      this.downloadLink.nativeElement.click();
    });
  }




}
