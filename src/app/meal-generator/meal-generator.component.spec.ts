import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealGeneratorComponent } from './meal-generator.component';

describe('MealGeneratorComponent', () => {
  let component: MealGeneratorComponent;
  let fixture: ComponentFixture<MealGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealGeneratorComponent]
    });
    fixture = TestBed.createComponent(MealGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
