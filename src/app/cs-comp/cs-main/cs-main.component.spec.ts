import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsMainComponent } from './cs-main.component';

describe('CsMainComponent', () => {
  let component: CsMainComponent;
  let fixture: ComponentFixture<CsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsMainComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct group info', () => {
    expect(component.groupInfo.name).toBe('兰州大学核分析技术课题组');
    expect(component.groupInfo.established).toBe('2019年10月');
  });

  it('should have correct academic activities', () => {
    expect(component.academicActivities.length).toBe(6);
  });
});