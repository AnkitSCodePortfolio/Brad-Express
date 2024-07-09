import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonFashionComponent } from './amazon-fashion.component';

describe('AmazonFashionComponent', () => {
  let component: AmazonFashionComponent;
  let fixture: ComponentFixture<AmazonFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmazonFashionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmazonFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
