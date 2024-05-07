import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomsSelectorComponent } from './atoms-selector.component';

describe('AtomsSelectorComponent', () => {
  let component: AtomsSelectorComponent;
  let fixture: ComponentFixture<AtomsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomsSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtomsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
