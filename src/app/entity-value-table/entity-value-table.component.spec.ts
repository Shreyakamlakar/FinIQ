import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityValueTableComponent } from './entity-value-table.component';

describe('EntityValueTableComponent', () => {
  let component: EntityValueTableComponent;
  let fixture: ComponentFixture<EntityValueTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityValueTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntityValueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
