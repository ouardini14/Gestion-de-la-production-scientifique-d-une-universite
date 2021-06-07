import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDocComponent } from './home-doc.component';

describe('HomeDocComponent', () => {
  let component: HomeDocComponent;
  let fixture: ComponentFixture<HomeDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
