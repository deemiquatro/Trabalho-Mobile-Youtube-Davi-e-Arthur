import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesPage } from './descricao.page';

describe('DetalhesPage', () => {
  let component: DetalhesPage;
  let fixture: ComponentFixture<DetalhesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
