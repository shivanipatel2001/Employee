import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEditDepComponent } from './app-edit-dep.component';

describe('AppEditDepComponent', () => {
  let component: AppEditDepComponent;
  let fixture: ComponentFixture<AppEditDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEditDepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppEditDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
