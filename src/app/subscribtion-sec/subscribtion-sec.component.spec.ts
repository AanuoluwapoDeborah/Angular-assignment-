import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribtionSecComponent } from './subscribtion-sec.component';

describe('SubscribtionSecComponent', () => {
  let component: SubscribtionSecComponent;
  let fixture: ComponentFixture<SubscribtionSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribtionSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscribtionSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
