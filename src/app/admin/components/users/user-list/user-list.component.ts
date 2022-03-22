import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ExtensionModel } from 'src/app/admin/interfaces/extension-model';

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
  constructor(private matDialog: MatDialog,
    private af: AngularFirestore,  private router: Router) {
   }

  ngOnInit(): void {
    this.getUsersList();
  }

  searchUsers(search:any){
    this.dataSource.filter = search.toLowerCase().trim();
  }

  editUser(userId : string){
    this.router.navigate(['/admin/user-edit/'+userId]);
    
  }

  deleteUser(){
    
  }

  getUsersList(){
    this.af.collection("Users").snapshotChanges().subscribe((data) => {
      this.usersList = [];
      data.map(e => {
        var y : any = e.payload.doc.data();
        y["$key"] = e.payload.doc.id;
        this.usersList.push(y as any);
      });
      this.dataSource = new MatTableDataSource(this.usersList);
      this.dataSource.paginator = this.paginator;
    })
  }



  addUser(){
    this.router.navigate(['/admin/user-add']);
  }

}
