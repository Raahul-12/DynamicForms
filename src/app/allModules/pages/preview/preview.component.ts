import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  SI: any;
  Name: string;
  LoremIpsum: any;
}
export interface PeriodicElement1 {
  option1: any;
  option2: any;
  option3: any;
  option4: any;
  state:any;
}
const ELEMENT_DATA:PeriodicElement1[] = [
{state: '1', option1:' ', option2:' ', option3:' ', option4:' '},
{state: '1', option1:'', option2:'', option3:'', option4:''},
{state: '1', option1:'', option2:'', option3:'', option4:''}
]
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  displayedColumns: string[] = ['SI', 'Name', 'LoremIpsum', 'LoremIpsum', 'LoremIpsum'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  displayedColumns1: string[] = ['state', 'option1', 'option2', 'option3', 'option4'];
  // dataSource1 = new MatTableDataSource<PeriodicElement1>();
  dataSource1 = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
