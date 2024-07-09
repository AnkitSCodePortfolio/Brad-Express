import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonFreshComponent } from './amazon-fresh.component';

describe('AmazonFreshComponent', () => {
  let component: AmazonFreshComponent;
  let fixture: ComponentFixture<AmazonFreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmazonFreshComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmazonFreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
