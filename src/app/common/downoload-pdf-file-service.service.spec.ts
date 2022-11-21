import { TestBed } from '@angular/core/testing';

import { DownoloadPdfFileServiceService } from './downoload-pdf-file-service.service';

describe('DownoloadPdfFileServiceService', () => {
  let service: DownoloadPdfFileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownoloadPdfFileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
