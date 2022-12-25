import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyComponent } from './body.component';
import { GaugeComponent } from '../gauge/gauge.component';
import { By } from '@angular/platform-browser';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;
  let html2canvasResult: HTMLCanvasElement;

  beforeEach(() => {
    html2canvasResult = {
      toDataURL: () => 'data:image/jpeg;base64,abc123',
    } as HTMLCanvasElement;


    TestBed.configureTestingModule({
      imports: [BodyComponent, GaugeComponent],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call downloadImage when button is clicked', () => {
    spyOn(component, 'downloadImage');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.downloadImage).toHaveBeenCalled();
  });

  it('should set downloadLink attributes correctly', () => {
    component.downloadImage();
    fixture.detectChanges();
    const downloadLinkDebugElement = fixture.debugElement.query(By.css('#downloadLink'));
    const downloadLink = downloadLinkDebugElement.nativeElement;
    expect(downloadLink.href).toEqual(html2canvasResult.toDataURL('image/jpeg', 1.0));
    expect(downloadLink.download).toEqual(`${component.gauge.gaugeValue}x${component.gauge.gaugeValue2}`);
  });
  it('should set canvas src attribute correctly', () => {
    component.downloadImage();
    fixture.detectChanges();
    const canvasDebugElement = fixture.debugElement.query(By.css('#canvas'));
    const canvas = canvasDebugElement.nativeElement;
    expect(canvas.src).toEqual(html2canvasResult.toDataURL());
  });

});
