import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { GaugeComponent } from "../gauge/gauge.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    standalone: true,
    selector: 'app-body',
    template: `
<app-header (downlaod)="downloadImage()"></app-header>
<div class="h-16 bg-sky-400 w-120">
  <p>Example Header</p>
</div>
    <div #screen  class=" w-120 h-60 bg-zinc-400">
  <app-gauge  #gauge></app-gauge>
</div>
<div class="hidden w-120 h-60" id="download">
     <img #canvas />
     <a #downloadLink></a>
</div>
 `,
    imports: [GaugeComponent, HeaderComponent]
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
