import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSecComponent } from './explore-sec.component';

describe('ExploreSecComponent', () => {
  let component: ExploreSecComponent;
  let fixture: ComponentFixture<ExploreSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
