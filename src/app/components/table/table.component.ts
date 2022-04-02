import { Component, Input, OnInit } from '@angular/core';

const COUNTRY_DATA: any[] = [];

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'Date',
    'Country',
    'TotalConfirmed',
    'TotalDeaths',
    'NewConfirmed',
  ];

  @Input() tableData: any;

  ngOnInit(): void {
    this.tableData.map((c: any) => COUNTRY_DATA.push({
         Country: c.Country,
         Date: c.Date,
         TotalConfirmed: c.TotalConfirmed,
         TotalDeaths: c.totalDeaths,
         NewConfirmed: c.newConfirmed
    }));
    
  }
}
