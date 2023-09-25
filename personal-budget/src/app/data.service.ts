import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Register the service at the root level
})
export class DataService {
  // private data: any = {
  //   data: [],
  //   labels: []
  // }; // Variable to store data

  private data: any[]=[];

  constructor(private http: HttpClient) {}

  // Function to fetch data from the backend
  fetchData(): Observable<any[]> {
    // Adjust the URL to your backend API endpoint
    const apiUrl = 'http://localhost:3000/budget';

    return this.http.get<any[]>(apiUrl);
  }

  // Function to set the data property
  setData(newData: any): void {
    this.data = newData;
  }

  // Function to get the data
  getData(): any {
    return this.data;
  }
}
