import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPipe } from './search-pipe.component';

describe('SearchPipeComponent', () => {
  let component: SearchPipe;
  let fixture: ComponentFixture<SearchPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
