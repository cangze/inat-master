import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsLayoutWithSidebarComponent } from './cs-layout-with-sidebar.component';

describe('CsHomeComponent', () => {
  let component: CsLayoutWithSidebarComponent;
  let fixture: ComponentFixture<CsLayoutWithSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsLayoutWithSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsLayoutWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
