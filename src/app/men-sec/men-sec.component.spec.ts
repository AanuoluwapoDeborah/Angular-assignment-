import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenSecComponent } from './men-sec.component';

describe('MenSecComponent', () => {
  let component: MenSecComponent;
  let fixture: ComponentFixture<MenSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
