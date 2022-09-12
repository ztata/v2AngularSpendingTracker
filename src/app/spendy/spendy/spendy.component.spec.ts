import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendyComponent } from './spendy.component';

describe('SpendyComponent', () => {
  let component: SpendyComponent;
  let fixture: ComponentFixture<SpendyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
