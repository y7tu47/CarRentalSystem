import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmanagerComponent } from './carmanager.component';

describe('CarmanagerComponent', () => {
  let component: CarmanagerComponent;
  let fixture: ComponentFixture<CarmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarmanagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
