import { Component } from '@angular/core';
import { ExportAsService, ExportAsConfig, ExportAsModule } from 'ngx-export-as';
import { GaugeComponent } from "../gauge/gauge.component";

@Component({
    standalone: true,
    selector: 'app-body',
    template: `

    <div id="body" class="w-120 h-68 bg-sky-300">
  <app-gauge></app-gauge>
<button (click)="download()" >download</button>
</div>

 `,
    imports: [GaugeComponent,ExportAsModule]
})
export class BodyComponent {
  exportAsConfig: ExportAsConfig = {
    type: 'png', // the type you want to download
    elementIdOrContent: 'body', // the id of html/table element
  }

  constructor(private exportAsService: ExportAsService) { }

  download() {
    this.exportAsService.save(this.exportAsConfig, 'myFile').subscribe(() => {
      // save started
    });
  }


}
