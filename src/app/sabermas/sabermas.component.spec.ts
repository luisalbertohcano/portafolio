import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabermasComponent } from './sabermas.component';

describe('SabermasComponent', () => {
  let component: SabermasComponent;
  let fixture: ComponentFixture<SabermasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabermasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabermasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
