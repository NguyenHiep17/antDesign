import { Person, listOfData } from './../danhsach';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.scss']
})
export class EmployeeManagerComponent implements OnInit {

  @Input() Person!: Person;
  listOfData = listOfData;

  visible = false;
  key = 0;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  editCache: { [key: string]: { edit: boolean; data: Person } } = {};

  constructor() { }

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
