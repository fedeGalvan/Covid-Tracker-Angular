import { HttpClient } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tableData: any = [];
  response: any;
  showTable: boolean = false;
  inputValue: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get('https://api.covid19api.com/summary').subscribe(
      (Response) => {
        this.response = Response;
        this.tableData = this.response.Countries;
        this.showTable = true;
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  filterTable($event: any) {
    this.inputValue = $event;

    this.tableData = this.tableData.filter((x: any) => {
      return x.Country.toLowerCase().includes(this.inputValue.toLowerCase());
    });
  }
}
