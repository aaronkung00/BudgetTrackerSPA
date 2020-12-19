import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmIncomeComponent } from './rm-income.component';

describe('RmIncomeComponent', () => {
  let component: RmIncomeComponent;
  let fixture: ComponentFixture<RmIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
