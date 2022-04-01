import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input()
  public totalPages!: number[];

  @Input()
  public currentPage!: number;

  @Output()
  public onPageClick: EventEmitter<number> = new EventEmitter();

  public setPageTo(page: number): void {
    this.onPageClick.next(page);
  }

  public trackByFn(index: number, item: any): number {
    return index;
  }
}
