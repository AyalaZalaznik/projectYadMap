import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RighteScreenComponent } from './righte-screen.component';

describe('RighteScreenComponent', () => {
  let component: RighteScreenComponent;
  let fixture: ComponentFixture<RighteScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RighteScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RighteScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
