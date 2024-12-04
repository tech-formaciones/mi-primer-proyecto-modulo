import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesinfoComponent } from './imagesinfo.component';

describe('ImagesinfoComponent', () => {
  let component: ImagesinfoComponent;
  let fixture: ComponentFixture<ImagesinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagesinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
