import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedSnackBarComponent } from './added-snack-bar.component';

describe('AddedSnackBarComponent', () => {
  let component: AddedSnackBarComponent;
  let fixture: ComponentFixture<AddedSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedSnackBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
