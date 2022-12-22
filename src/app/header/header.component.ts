import { Component } from '@angular/core';
import { GaugeComponent } from '../gauge/gauge.component';
import { GaugeService } from '../gauge/gauge.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone : true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [GaugeComponent],
  imports: [FormsModule]
})
export class HeaderComponent {

  constructor(private gaugeService:GaugeService) {

  }
  public gaugeValue = 0;  // initialize the gauge value
  public gaugeValue2 = 0;  // initialize the gauge value


  updateGaugeValue() {
    this.gaugeService.updateGaugeValue(this.gaugeValue);
  }

  updateGaugeValue2() {
    this.gaugeService.updateGaugeValue2(this.gaugeValue2);
  }


  public increaseGaugeValue() {
    this.gaugeValue += 1;  // increase the gauge value
    this.gaugeService.updateGaugeValue(this.gaugeValue);  // update the gaug
   }

  public decreaseGaugeValue() {
    this.gaugeValue -= 1;  // decrease the gauge value
    this.gaugeService.updateGaugeValue(this.gaugeValue);  // update the gauge value in the service
  }

  public increaseGaugeValue2() {
    this.gaugeValue2 += 1;  // increase the gauge value
    this.gaugeService.updateGaugeValue2(this.gaugeValue2);  // update the gaug
   }

   public decreaseGaugeValue2() {
    this.gaugeValue2 -= 1;  // decrease the gauge value
    this.gaugeService.updateGaugeValue2(this.gaugeValue2);  // update the gauge value in the service
  }



}
