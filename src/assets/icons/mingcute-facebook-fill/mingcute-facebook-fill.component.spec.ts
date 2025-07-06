import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MingcuteFacebookFillComponent } from './mingcute-facebook-fill.component';

describe('MingcuteFacebookFillComponent', () => {
  let component: MingcuteFacebookFillComponent;
  let fixture: ComponentFixture<MingcuteFacebookFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MingcuteFacebookFillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MingcuteFacebookFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
