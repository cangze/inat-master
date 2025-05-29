import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsRouterPathComponent } from './cs-router-path.component';

describe('CsRouterPathComponent', () => {
  let component: CsRouterPathComponent;
  let fixture: ComponentFixture<CsRouterPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsRouterPathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsRouterPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
