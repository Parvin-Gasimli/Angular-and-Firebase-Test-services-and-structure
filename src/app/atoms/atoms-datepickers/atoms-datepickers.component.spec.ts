import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomsDatepickersComponent } from './atoms-datepickers.component';

describe('AtomsDatepickersComponent', () => {
  let component: AtomsDatepickersComponent;
  let fixture: ComponentFixture<AtomsDatepickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomsDatepickersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtomsDatepickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
