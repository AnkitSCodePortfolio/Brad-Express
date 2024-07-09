import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexaCategoriesComponent } from './alexa-categories.component';

describe('AlexaCategoriesComponent', () => {
  let component: AlexaCategoriesComponent;
  let fixture: ComponentFixture<AlexaCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlexaCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlexaCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
