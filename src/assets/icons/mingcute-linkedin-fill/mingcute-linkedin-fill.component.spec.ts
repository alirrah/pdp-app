import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MingcuteLinkedinFillComponent } from './mingcute-linkedin-fill.component';

describe('MingcuteLinkedinFillComponent', () => {
  let component: MingcuteLinkedinFillComponent;
  let fixture: ComponentFixture<MingcuteLinkedinFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MingcuteLinkedinFillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MingcuteLinkedinFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
