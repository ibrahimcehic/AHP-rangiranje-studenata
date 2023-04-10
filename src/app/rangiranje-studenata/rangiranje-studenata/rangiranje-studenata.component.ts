import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/shared/models/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-rangiranje-studenata',
  templateUrl: './rangiranje-studenata.component.html',
  styleUrls: ['./rangiranje-studenata.component.css']
})
export class RangiranjeStudenataComponent implements OnInit{
  sviStudenti: Student[] = []
  constructor(private studentServis: StudentService, private messageService: MessageService){}
  ngOnInit(): void {
    this.getAllStudents();  
  }
  
  getAllStudents(){
    this.studentServis.getStudents().subscribe({
      next: (resp) => {
        this.sviStudenti = resp;

      },
      error: (e) =>{

      },
      complete: () =>{
      this.sviStudenti.sort((a,b) => (a.kriterij_tezinska_vrijednost > b.kriterij_tezinska_vrijednost) ? -1:1)
      }
    }
      
    )
  }
}
