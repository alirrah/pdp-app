import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MingcuteYoutubeFillComponent } from './mingcute-youtube-fill.component';

describe('MingcuteYoutubeFillComponent', () => {
  let component: MingcuteYoutubeFillComponent;
  let fixture: ComponentFixture<MingcuteYoutubeFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MingcuteYoutubeFillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MingcuteYoutubeFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
