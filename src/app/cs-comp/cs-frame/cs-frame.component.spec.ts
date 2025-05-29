import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFrameComponent } from './cs-frame.component';

describe('CsFrameComponent', () => {
  let component: CsFrameComponent;
  let fixture: ComponentFixture<CsFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
