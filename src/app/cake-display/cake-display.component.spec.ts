import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDisplayComponent } from './cake-display.component';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

describe('CakeDisplayComponent', () => {
  let component: CakeDisplayComponent;
  let fixture: ComponentFixture<CakeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Angular2ImageGalleryModule],
      declarations: [CakeDisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
