import { Component, Output, EventEmitter } from '@angular/core';
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

  @Output() downlaod = new EventEmitter<void>();

  constructor(private gaugeService:GaugeService) {

  }
  public gaugeValue = 0;  // initialize the gauge value
  public gaugeValue2 = 0;  // initialize the gauge value

  downloadImage() {
    this.downlaod.emit();
  }

  updateGaugeValue() {
    this.gaugeService.updateGaugeValue(this.gaugeValue);
  }

  updateGaugeValue2() {
    this.gaugeService.updateGaugeValue2(this.gaugeValue2);
  }


  public increaseGaugeValue() {
    this.gaugeValue += 1;  // increase the gauge value
    this.updateGaugeValue();  // update the gauge value in the service
   }

  public decreaseGaugeValue() {
    this.gaugeValue -= 1;  // decrease the gauge value
    this.updateGaugeValue();  // update the gauge value in the service
  }

  public increaseGaugeValue2() {
    this.gaugeValue2 += 1;  // increase the gauge value
    this.updateGaugeValue2();  // update the gauge value in the service
   }

   public decreaseGaugeValue2() {
    this.gaugeValue2 -= 1;  // decrease the gauge value
    this.updateGaugeValue2();  // update the gauge value in the service
  }



}
