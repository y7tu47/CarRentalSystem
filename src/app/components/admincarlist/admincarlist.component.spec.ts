import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincarlistComponent } from './admincarlist.component';

describe('AdmincarlistComponent', () => {
  let component: AdmincarlistComponent;
  let fixture: ComponentFixture<AdmincarlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincarlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
