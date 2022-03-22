import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ExtensionModel } from '../../../interfaces/extension-model';

@Component({
  selector: 'app-extension-list',
  templateUrl: './extension-list.component.html',
  styleUrls: ['./extension-list.component.css']
})
export class ExtensionListComponent implements OnInit {
  usersList: any;
  title = 'datatables';
  dataSource : any;
  extensionList: ExtensionModel[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  columndefs : any[] = ['extName','extensionIndex','description','action'];
  dtOptions: DataTables.Settings = {};
  constructor(private matDialog: MatDialog,
    private af: AngularFirestore,  private router: Router) {
   }

  ngOnInit(): void {
    this.getExtensionList();
  }

  searchExtension(search:any){
    this.dataSource.filter = search.toLowerCase().trim();
  }

  viewExtension(key:string){
    debugger;
  }

  editExtension(key:string){
    this.router.navigate(['/admin/edit-ext/'+key]);
  }

  deleteExtension(key:string){

  }

  addExtension(){
    this.router.navigate(['/admin/add-ext']);
  }

  getExtensionList(){
    this.af.collection("extensions").snapshotChanges().subscribe((data) => {
      this.extensionList = [];
      data.map(e => {
        var y : any = e.payload.doc.data();
        y["$key"] = e.payload.doc.id;
        this.extensionList.push(y as ExtensionModel);
      });
      this.dataSource = new MatTableDataSource(this.extensionList);
      this.dataSource.paginator = this.paginator;
    })
  }

}
