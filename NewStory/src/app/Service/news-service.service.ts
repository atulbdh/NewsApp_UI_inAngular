import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { Observable } from 'rxjs'; 


import { ITabelState } from '../_interface/itabel-state';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  
  readonly API_URL = "http://localhost:5150";

  constructor(private http: HttpClient) { } 

  // getNewsList(_tableState:ITabelState ): Observable<IPagedResponce<News>> {
  //   return this.http.get<IPagedResponce<News>>(this.API_URL + '/News/'+ _tableState.pageNumber +','+ _tableState.pageSize +'?WhereCriteria='+_tableState.searchTerm )
  //     .pipe(
  //        map((res: IPagedResponce<News>) => { return res }) 
              
  //     )
  // }
  getNewsList(_tableState:ITabelState ):Observable<any>{
    if(_tableState.searchTerm=="")
    {
      return this.http.get<any>(this.API_URL + '/News/'+ _tableState.pageNumber +','+ _tableState.pageSize)  
    }
    else
    {
      return this.http.get<any>(this.API_URL + '/News/'+ _tableState.pageNumber +','+ _tableState.pageSize +'?WhereCriteria='+_tableState.searchTerm )  
    }
   
  }
}
