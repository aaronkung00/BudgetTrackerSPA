import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmUserComponent } from './rm-user.component';

describe('RmUserComponent', () => {
  let component: RmUserComponent;
  let fixture: ComponentFixture<RmUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
