import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixPageComponent } from './pix-page.component';

describe('PixPageComponent', () => {
  let component: PixPageComponent;
  let fixture: ComponentFixture<PixPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
