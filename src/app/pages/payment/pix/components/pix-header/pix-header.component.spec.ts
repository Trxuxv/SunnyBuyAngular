import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixHeaderComponent } from './pix-header.component';

describe('PixHeaderComponent', () => {
  let component: PixHeaderComponent;
  let fixture: ComponentFixture<PixHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
