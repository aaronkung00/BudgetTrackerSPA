import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmExpenseComponent } from './rm-expense.component';

describe('RmExpenseComponent', () => {
  let component: RmExpenseComponent;
  let fixture: ComponentFixture<RmExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
