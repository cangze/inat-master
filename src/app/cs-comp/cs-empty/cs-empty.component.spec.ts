import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsEmptyComponent } from './cs-empty.component';

describe('CsEmptyComponent', () => {
  let component: CsEmptyComponent;
  let fixture: ComponentFixture<CsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsEmptyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
