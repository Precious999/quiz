import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadMessagePage } from './read-message.page';

describe('ReadMessagePage', () => {
  let component: ReadMessagePage;
  let fixture: ComponentFixture<ReadMessagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
