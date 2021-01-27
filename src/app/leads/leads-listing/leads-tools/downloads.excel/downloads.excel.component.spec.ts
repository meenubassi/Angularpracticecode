import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Downloads.ExcelComponent } from './downloads.excel.component';

describe('Downloads.ExcelComponent', () => {
  let component: Downloads.ExcelComponent;
  let fixture: ComponentFixture<Downloads.ExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Downloads.ExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Downloads.ExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
