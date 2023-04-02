import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http: HttpClient) { }
  url: string = "  http://localhost:3000/students/"
  url2: string = "  http://localhost:3000/employees"
  getStudents(): Observable<Student>{
    return this.http.get<Student>(this.url)
  }
  setStudent(st: Student): Observable<Student>{
    return this.http.post<Student>(this.url, st)
  }
  getEmployes(): Observable<any>{
    return this.http.get<any>(this.url2)
  }
  getEmployeById(id: number): Observable<any>{
    return this.http.get<any>(this.url2+`/`+ id)
  }
  postEmpolye(emp: any): Observable<any>{
    return this.http.post<any>(this.url2, emp)
  }
}
