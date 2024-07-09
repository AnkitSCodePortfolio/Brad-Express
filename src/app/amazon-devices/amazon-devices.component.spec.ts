import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonDevicesComponent } from './amazon-devices.component';

describe('AmazonDevicesComponent', () => {
  let component: AmazonDevicesComponent;
  let fixture: ComponentFixture<AmazonDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmazonDevicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmazonDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
