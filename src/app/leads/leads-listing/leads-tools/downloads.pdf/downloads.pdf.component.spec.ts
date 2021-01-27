import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Downloads.PdfComponent } from './downloads.pdf.component';

describe('Downloads.PdfComponent', () => {
  let component: Downloads.PdfComponent;
  let fixture: ComponentFixture<Downloads.PdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Downloads.PdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Downloads.PdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
