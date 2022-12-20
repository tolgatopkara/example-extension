import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class GaugeService {
  private gaugeValueSubject = new Subject<number>();
  private gaugeValueSubject2 = new Subject<number>();

  public gaugeValue$ = this.gaugeValueSubject.asObservable();
  public gaugeValue2$ = this.gaugeValueSubject2.asObservable();

  // constructor() {}

  public updateGaugeValue(value: number) {
    this.gaugeValueSubject.next(value);
  }

  public updateGaugeValue2(value: number) {
    this.gaugeValueSubject2.next(value);
  }

}
