import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaSecComponent } from './social-media-sec.component';

describe('SocialMediaSecComponent', () => {
  let component: SocialMediaSecComponent;
  let fixture: ComponentFixture<SocialMediaSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
