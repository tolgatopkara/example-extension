import { Component, ViewChild } from '@angular/core';
import { ExportAsService, ExportAsConfig, ExportAsModule } from 'ngx-export-as';
import { GaugeComponent } from "../gauge/gauge.component";

@Component({
  standalone: true,
  selector: 'app-body',
  template: `

    <div id="downloadedItem" class=" w-120 h-68 bg-zinc-900">
  <app-gauge  #gauge></app-gauge>
</div>
<button (click)="download()" >download</button>


 `,
  imports: [GaugeComponent, ExportAsModule]
})
export class BodyComponent {

  @ViewChild('gauge')
  gauge!: GaugeComponent;

  exportAsConfig: ExportAsConfig = {
    type: 'png', // the type you want to download
    elementIdOrContent: 'downloadedItem', // the id of html/table element
    options: {
      scale: 1,

      // html2canvas options
    }

  }

  constructor(private exportAsService: ExportAsService) { }

  download() {
    this.exportAsService.save(this.exportAsConfig, `${this.gauge.gaugeValue} x ${this.gauge.gaugeValue2}`).subscribe(() => {
      // save started
    });
  }


}
