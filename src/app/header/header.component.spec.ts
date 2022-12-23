import { async, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent],
    })
      .compileComponents();

    const fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  }));

  it('should initialize gaugeValue and gaugeValue2 to 0', () => {
    expect(component.gaugeValue).toBe(0);
    expect(component.gaugeValue2).toBe(0);
  });


  it('should increase gaugeValue by 1', () => {
    component.gaugeValue = 10;
    component.increaseGaugeValue();
    expect(component.gaugeValue).toBe(11);
  });

  it('should decrease gaugeValue by 1 when decreaseGaugeValue() is called', () => {
    component.gaugeValue = 10;
    component.decreaseGaugeValue();
    expect(component.gaugeValue).toBe(9);
  });

  it('should increase gaugeValue2 by 1', () => {
    component.gaugeValue2 = 10;
    component.increaseGaugeValue2();
    expect(component.gaugeValue2).toBe(11);
  });

  it('should decrease gaugeValue2 by 1 when decreaseGaugeValue2() is called', () => {
    component.gaugeValue2 = 10;
    component.decreaseGaugeValue2();
    expect(component.gaugeValue2).toBe(9);
  });

  it('should call updateGaugeValue() when increaseGaugeValue() is called', () => {
    spyOn(component, 'updateGaugeValue');
    component.increaseGaugeValue();
    expect(component.updateGaugeValue).toHaveBeenCalled();
  });

  it('should call updateGaugeValue() when decreaseGaugeValue() is called', () => {
    spyOn(component, 'updateGaugeValue');
    component.decreaseGaugeValue();
    expect(component.updateGaugeValue).toHaveBeenCalled();
  });

  it('should call updateGaugeValue2() when increaseGaugeValue2() is called', () => {
    spyOn(component, 'updateGaugeValue2');
    component.increaseGaugeValue2();
    expect(component.updateGaugeValue2).toHaveBeenCalled();
  });

  it('should call updateGaugeValue2() when decreaseGaugeValue2() is called', () => {
    spyOn(component, 'updateGaugeValue2');
    component.decreaseGaugeValue2();
    expect(component.updateGaugeValue2).toHaveBeenCalled();
  });


});


