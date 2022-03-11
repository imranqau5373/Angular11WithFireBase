import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-extension-list',
  templateUrl: './extension-list.component.html',
  styleUrls: ['./extension-list.component.css']
})
export class ExtensionListComponent implements OnInit {
  usersList: any;
  title = 'datatables';
  dataSource : any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  columndefs : any[] = ['extName','description','action'];
  dtOptions: DataTables.Settings = {};
  constructor(private matDialog: MatDialog) {
   }

  ngOnInit(): void {
  }

  searchExtension(search:any){
    this.dataSource.filter = search.toLowerCase().trim();
  }

  viewExtension(){

  }

}
