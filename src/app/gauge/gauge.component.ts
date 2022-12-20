import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { GaugeService } from './gauge.service';

@Component({
  standalone : true,
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  imports: [IgxRadialGaugeModule]
})
export class GaugeComponent implements OnInit   {

 constructor(private gaugeService:GaugeService) { }

  @Input() gaugeValue=50;
  @Input() gaugeValue2=50;
  ngOnInit(): void {
    this.gaugeService.gaugeValue$.subscribe(value => {
      this.gaugeValue = value;
    });
    this.gaugeService.gaugeValue2$.subscribe(value => {
      this.gaugeValue2 = value;
    });
  }

  // gaugeValue!: number;

  @ViewChild("radialGauge", { static: true })
  public radialGauge!: IgxRadialGaugeModule;



}
