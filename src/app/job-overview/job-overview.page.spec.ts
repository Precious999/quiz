import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobOverviewPage } from './job-overview.page';

describe('JobOverviewPage', () => {
  let component: JobOverviewPage;
  let fixture: ComponentFixture<JobOverviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
