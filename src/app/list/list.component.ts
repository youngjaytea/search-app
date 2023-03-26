import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() searchText = '';
  employees: any[] = [];
  hoverIndex = -1;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((response: any) => {
      this.employees = response.data
        .map((employee: any) => ({
          id: employee.id,
          name: `${employee.first_name} ${employee.last_name}`,
        }))
        .sort((a: any, b: any) =>
          a.name.split(' ')[1].localeCompare(b.name.split(' ')[1])
        );
    });
  }

  get filteredEmployees() {
    return this.employees.filter((employee) =>
      employee.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
