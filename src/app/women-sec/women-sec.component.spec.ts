import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenSecComponent } from './women-sec.component';

describe('WomenSecComponent', () => {
  let component: WomenSecComponent;
  let fixture: ComponentFixture<WomenSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
