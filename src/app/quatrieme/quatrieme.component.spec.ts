import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatriemeComponent } from './quatrieme.component';

describe('QuatriemeComponent', () => {
  let component: QuatriemeComponent;
  let fixture: ComponentFixture<QuatriemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuatriemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuatriemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
