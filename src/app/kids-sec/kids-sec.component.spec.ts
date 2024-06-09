import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsSecComponent } from './kids-sec.component';

describe('KidsSecComponent', () => {
  let component: KidsSecComponent;
  let fixture: ComponentFixture<KidsSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
