import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajarconmigoComponent } from './trabajarconmigo.component';

describe('TrabajarconmigoComponent', () => {
  let component: TrabajarconmigoComponent;
  let fixture: ComponentFixture<TrabajarconmigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajarconmigoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajarconmigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
