import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgImage } from './bg-image';

describe('BgImage', () => {
  let component: BgImage;
  let fixture: ComponentFixture<BgImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
