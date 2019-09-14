import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { transactionData } from '../../../shared/fin-constants';

export interface Transaction {
  name: string;
  group: string;
  type: string;
  amount: number;
}

@Component({
  selector: 'app-fin-transactions',
  templateUrl: './fin-transactions.component.html',
  styleUrls: ['./fin-transactions.component.scss']
})
export class FinTransactionsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'group', 'amount'];
  dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(transactionData);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
