import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesCafeComponent } from './avaliacoes-cafe.component';

describe('AvaliacoesCafeComponent', () => {
  let component: AvaliacoesCafeComponent;
  let fixture: ComponentFixture<AvaliacoesCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacoesCafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacoesCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
