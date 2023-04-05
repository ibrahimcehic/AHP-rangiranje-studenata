import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/shared/models/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-lista-studenata',
  templateUrl: './lista-studenata.component.html',
  styleUrls: ['./lista-studenata.component.css']
})
export class ListaStudenataComponent implements OnInit{
  sviStudenti: Student[] = [];
  constructor(private studentServis: StudentService, private messageService: MessageService){}
  ngOnInit(): void {
    this.getAllStudents();
  }
  getAllStudents(){
    this.studentServis.getStudents().subscribe({
      next: (resp) => {
        this.sviStudenti = resp;
        console.log("ispis svih studenata:", this.sviStudenti);
      },
      error: (e) =>{

      },
      complete: () =>{

      }
    }
      
    )
  }
  deleteStudent(id: number){
    this.studentServis.deleteStudent(id).subscribe({
      next: () =>{

      },
      error: () =>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Greška kod brisanja studenta!' });
      },
      complete: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Student je uspješno uklonjen!' });
        this.getAllStudents();
      }
    })
  }

}
