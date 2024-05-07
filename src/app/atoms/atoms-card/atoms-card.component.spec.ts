import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomsCardComponent } from './atoms-card.component';

describe('AtomsCardComponent', () => {
  let component: AtomsCardComponent;
  let fixture: ComponentFixture<AtomsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtomsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
