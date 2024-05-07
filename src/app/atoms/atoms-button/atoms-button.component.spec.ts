import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomsButtonComponent } from './atoms-button.component';

describe('AtomsButtonComponent', () => {
  let component: AtomsButtonComponent;
  let fixture: ComponentFixture<AtomsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomsButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtomsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
