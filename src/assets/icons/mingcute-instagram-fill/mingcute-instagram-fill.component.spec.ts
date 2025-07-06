import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MingcuteInstagramFillComponent } from './mingcute-instagram-fill.component';

describe('MingcuteInstagramFillComponent', () => {
  let component: MingcuteInstagramFillComponent;
  let fixture: ComponentFixture<MingcuteInstagramFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MingcuteInstagramFillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MingcuteInstagramFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
