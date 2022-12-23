import { async, TestBed } from '@angular/core/testing';
import { BodyComponent } from './body.component';
import { ExportAsService } from 'ngx-export-as';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let exportAsService: ExportAsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BodyComponent ],
      providers: [ ExportAsService ]
    })
    .compileComponents();

    const fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    exportAsService = TestBed.inject(ExportAsService);
  }));

  it('should call save() on ExportAsService with the correct arguments when download() is called', () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000; // increase timeout interval to 10 seconds
    spyOn(exportAsService, 'save').and.callThrough();
    component.gauge.gaugeValue = 10;
    component.gauge.gaugeValue2 = 20;
    component.download();
    expect(exportAsService.save).toHaveBeenCalledWith(component.exportAsConfig, '10x20');
  });
});
