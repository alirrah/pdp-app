import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MingcuteTelegramFillComponent } from './mingcute-telegram-fill.component';

describe('MingcuteTelegramFillComponent', () => {
  let component: MingcuteTelegramFillComponent;
  let fixture: ComponentFixture<MingcuteTelegramFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MingcuteTelegramFillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MingcuteTelegramFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
