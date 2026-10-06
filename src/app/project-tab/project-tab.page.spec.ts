import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectTabPage } from './project-tab.page';

describe('ProjectTabPage', () => {
  let component: ProjectTabPage;
  let fixture: ComponentFixture<ProjectTabPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
