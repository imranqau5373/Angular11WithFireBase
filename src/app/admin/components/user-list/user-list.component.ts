import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersList: any;
  title = 'datatables';
  dataSource : any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  columndefs : any[] = ['firstName','lastName','email','clientName','action'];
  dtOptions: DataTables.Settings = {};
  constructor(private matDialog: MatDialog) {
   }

  ngOnInit(): void {
  }

  searchUsers(search:any){
    debugger;
    this.dataSource.filter = search.toLowerCase().trim();
  }

  viewUser(){
    
  }

}
