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

  @Input() gaugeValue=0;
  @Input() gaugeValue2=0;

  // animateLogic() {
  //   let startTime = Date.now();
  //   const duration = 1000; // 3s
  //   let direction = 19; // 1 = increasing, -1 = decreasing
  //   let finished = false; // Flag to indicate if animation is finished

  //   const animate = () => {
  //     if (finished) return; // Cancel timer if animation is finished

  //     const elapsed = Date.now() - startTime;
  //     this.gaugeValue += direction * (elapsed / duration);
  //     this.gaugeValue2 += direction * (elapsed / duration);

  //     if (elapsed >= duration) {
  //       direction *= -1; // Change direction
  //       startTime = Date.now();
  //       if (direction > 0) {
  //         finished = true; // Animation is finished
  //       }
  //     }
  //     requestAnimationFrame(animate);
  //   }

  //   animate();
  //   }

  ngOnInit(): void {
    // this.animateLogic();
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
