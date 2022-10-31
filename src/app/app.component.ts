import { Component} from "@angular/core";
import { employee, licence, sorted } from "./models";
import {MatSort,Sort} from '@angular/material/sort';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: []
})

export class AppComponent {
  title = "sample";
  deliveryHead = null;
  employees:Array<employee> = []
  licences = [
    {
      name:"VS 2019 Prof",
      consumed:5,
      deliveryHead: "subbu",
      column1:""
    },
    {
      name:"VS 2019 Prof",
      consumed:35,
      deliveryHead: "subbu",
      column1:""
    },
    {
      name:"SQL Server 2014",
      consumed:20,
      deliveryHead: "subbu",
      column1:""
    },
    {
      name:"Java JDK",
      consumed:10,
      deliveryHead: "subbu",
      column1:""
    },
    {
      name:"VS 2019 Prof",
      consumed:20,
      deliveryHead: "rajesh",
      column1:""
    },
    {
      name:"VS 2019 Prof",
      consumed:50,
      deliveryHead: "sanjeeb",
      column1:""
    },{
      name:"VS 2019 Prof",
      consumed:40,
      deliveryHead: "john",
      column1:""
    },
    {
      name:"VS 2019 Prof",
      consumed:30,
      deliveryHead: "peter",
      column1:""
    },
    {
      name:"VS 2022 Prof",
      consumed:15,
      deliveryHead: "john",
      column1:""
    },
    {
      name:"VS 2022 Prof",
      consumed:40,
      deliveryHead: "peter",
      column1:""
    },{
      name:"VS 2022 Prof",
      consumed:25,
      deliveryHead: "sanjeeb",
      column1:""
    },
    {
      name:"Java JDK",
      consumed:15,
      deliveryHead: "rajesh",
      column1:""
    },
    {
      name:"Java JDK",
      consumed:10,
      deliveryHead: "peter",
      column1:""
    },
    {
      name:"SQL Server 2014",
      consumed:30,
      deliveryHead: "john",
      column1:""
    },{
      name:"SQL Server 2014",
      consumed:25,
      deliveryHead: "rajesh",
      column1:""
    },
  ];
  selectedLicences: Array<licence> = [];
  sortedData: Array<sorted> = [];

  constructor() {}

  ngOnInit() {

  }
  getLicencesConsumed(event:any){
    this.deliveryHead = event.target.value;
    this.selectedLicences = [];
    this.employees = [];
    this.licences.forEach( (ele:any) => {
      if(this.deliveryHead === ele.deliveryHead){
        this.selectedLicences.push(ele);
      }
    });
  }
  getEployees(licence:any){
    
    this.employees =[
      {
        name: "Khadarbhi",
        machine: "Windows",
        email:"khadarbhi.shaik",
        manager:"rajesh"
      },
      {
        name: "Subbarao",
        machine: "Windows",
        email:"subbarao.v",
        manager:"sanjeeb"
      }
    ];

  }
  sortData(sort: Sort,type:number) {
    console.log(sort);
    if (!sort.active || sort.direction === '') {
      this.sortedData = type ? this.selectedLicences.slice(): this.employees.slice();
      return;
    }
    if(type === 1){
      this.selectedLicences = this.selectedLicences.slice().sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'name':
            return compare(a.name, b.name, isAsc);
          case 'consumed':
            return compare(a.consumed, b.consumed, isAsc);
          case 'column1':
            return compare(a.column1, b.column1, isAsc);
          default:
            return 0;
        }
      });
    } else{
      this.employees = this.employees.slice().sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'name':
            return compare(a.name, b.name, isAsc);
          case 'email':
            return compare(a.email, b.email, isAsc);
          case 'manager':
            return compare(a.manager, b.manager, isAsc);
          case 'machine':
            return compare(a.machine, b.machine, isAsc);
          default:
            return 0;
        }
      });
    }
    
  }
    
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}