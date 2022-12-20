import { Component } from '@angular/core';
import { GaugeComponent } from '../gauge/gauge.component';
import { GaugeService } from '../gauge/gauge.service';

@Component({
  standalone : true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [GaugeComponent]
})
export class HeaderComponent {

  constructor(private gaugeService:GaugeService) { }
  public gaugeValue = 50;  // initialize the gauge value
  public gaugeValue2 = 50;  // initialize the gauge value


  public increaseGaugeValue() {
    this.gaugeValue += 10;  // increase the gauge value
    this.gaugeService.updateGaugeValue(this.gaugeValue);  // update the gaug
   }

  public decreaseGaugeValue() {
    this.gaugeValue -= 10;  // decrease the gauge value
    this.gaugeService.updateGaugeValue2(this.gaugeValue2);  // update the gauge value in the service
  }

  public increaseGaugeValue2() {
    this.gaugeValue2 += 10;  // increase the gauge value
    this.gaugeService.updateGaugeValue2(this.gaugeValue2);  // update the gaug
   }

   public decreaseGaugeValue2() {
    this.gaugeValue2 -= 10;  // decrease the gauge value
    this.gaugeService.updateGaugeValue2(this.gaugeValue2);  // update the gauge value in the service
  }



}
