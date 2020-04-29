import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFaoundComponent } from './page-not-faound.component';

describe('PageNotFaoundComponent', () => {
  let component: PageNotFaoundComponent;
  let fixture: ComponentFixture<PageNotFaoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFaoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFaoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
