import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabData } from '@core/interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input()
  public tabs!: TabData[];

  @Output()
  public onTabClick: EventEmitter<TabData> = new EventEmitter();

  public onTabClickHandler(tab: TabData): void {
    this.onTabClick.emit(tab);
  }
}
