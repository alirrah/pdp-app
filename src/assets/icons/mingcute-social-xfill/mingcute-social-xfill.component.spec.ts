import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MingcuteSocialXFillComponent } from './mingcute-social-xfill.component';

describe('MingcuteSocialXFillComponent', () => {
  let component: MingcuteSocialXFillComponent;
  let fixture: ComponentFixture<MingcuteSocialXFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MingcuteSocialXFillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MingcuteSocialXFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
