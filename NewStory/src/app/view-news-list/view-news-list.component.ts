import { Component, OnInit  } from '@angular/core';


import { NewsServiceService } from '../Service/news-service.service';

import { ITabelState } from '../_interface/itabel-state';

@Component({
  selector: 'app-view-news-list',
  templateUrl: './view-news-list.component.html',
  styleUrls: ['./view-news-list.component.css']
})
export class ViewNewsListComponent implements OnInit {

  records:any=[];
  totalRecords: number;

  public _tableState:ITabelState = {
    pageNumber: 1,
    pageSize: 2,
    isActive: true,
    searchTerm: ''

  };
  searchText: '';
  constructor(
    private service:NewsServiceService 
  ){}

  ngOnInit(): void { 

    this.refresh();

  }

  refresh() {
    this.service.getNewsList(this._tableState)
      .subscribe((data: any) => {
        this.records = data['records'];
        this.totalRecords = data['totalRecords'];
      }
      )
  }

  onSearch() {
    this._tableState.searchTerm = this.searchText;
    this.service.getNewsList(this._tableState)
      .subscribe((data: any) => {
        this.records = data['records'];
        this.totalRecords = data['totalRecords'];
      })
  }

}
