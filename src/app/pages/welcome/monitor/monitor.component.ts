import { Component, Input, OnInit} from '@angular/core';
import { Person, listOfData } from '../danhsach';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
  @Input() Person!: Person;
  listOfData = listOfData;

  editCache: { [key: string]: { edit: boolean; data: Person } } = {};

  constructor() {}

  startEdit(key: string): void {
    this.editCache[key].edit = true;
  }

  cancelEdit(key: string): void {
    let index = this.listOfData.findIndex(item => item.key === key);
    this.editCache[key] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(key: string): void {
    const index = this.listOfData.findIndex(item => item.key === key);
    Object.assign(this.listOfData[index], this.editCache[key].data);
    this.editCache[key].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.key] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  deleteRow(key: string): void {
    this.listOfData = this.listOfData.filter(d => d.key !== key);
  }

  ngOnInit(): void {
    this.updateEditCache();
  }

}
