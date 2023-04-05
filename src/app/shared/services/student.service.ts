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
  url2: string = "  http://localhost:3000/criteriaWeight"
  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.url)
  }
  setStudent(st: Student): Observable<Student>{
    return this.http.post<Student>(this.url, st)
  }
  deleteStudent(id: number): Observable<Student>{
    return this.http.delete<Student>(this.url + id)
  }
  getCriteriaWeight(): Observable<any>{
    return this.http.get<any>(this.url2 + '/1')
  }
  updateCriteriaWeight(lista: number[][]): Observable<number[][]>{
    return this.http.put<number[][]>(this.url2 + '/1', lista);
  }
}
