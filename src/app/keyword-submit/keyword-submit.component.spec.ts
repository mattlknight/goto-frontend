import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordSubmitComponent } from './keyword-submit.component';

describe('KeywordSubmitComponent', () => {
  let component: KeywordSubmitComponent;
  let fixture: ComponentFixture<KeywordSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
