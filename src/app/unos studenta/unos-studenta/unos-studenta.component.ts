import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/shared/models/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-unos-studenta',
  templateUrl: './unos-studenta.component.html',
  styleUrls: ['./unos-studenta.component.css']
})
export class UnosStudentaComponent implements OnInit{
  noviStudent: Student | undefined;
constructor( private fb: FormBuilder, private studentServis: StudentService, private messageService: MessageService){}
  ngOnInit(): void {
    //this.studentServis.getEmployeById(1).subscribe(res => console.log("Ispis responsa by id pretraga:", res))
    //this.studentServis.postEmpolye({"name": "Lisa","salary": "2000"}).subscribe(res => console.log("Ispis responsa unos:", res));
    /* this.noviStudent = {
      ime: "Ibrahim",
      fakultet: "Tehnicki",
      prezime: "Cehic",
      univerzitet: "Bihacki univerzitet",
      deficitarno_zanimanje: false,
      prijava_bez_bodovanja: false,
      kriteriji: {
        godina_studija: 2,
        ciklus: 1,
        uspjeh: 10,
        broj_clanova: 5,
        invalidnost_roditelja: false,
        bolest_clanova_bez_rjesenja:  false,
        student_bez_jednog_roditelja: true,
        student_neutvrdenog_ocinstva: false,
        rastavljeni_samohrani_roditelj: false,
        broj_studenata_iz_domacinstva: 4,
        broj_ucenika: 2,
        mjesecni_prihod: 1240
      }
    } */
    console.log("Ispis studenta:", this.noviStudent)
    //this.studentServis.setStudent(this.noviStudent).subscribe(res => console.log("unesen studdent:", res))
  }
studetForm: FormGroup = this.fb.group({
  student: new FormGroup({
  ime: new FormControl('', Validators.required),
  prezime: new FormControl('',Validators.required),
  univerzitet: new FormControl('',Validators.required),
  fakultet: new FormControl('',Validators.required),
  prijava_bez_bodovanja: new FormControl(false),
  deficitarno_zanimanje: new FormControl(false),
  kriteriji: new FormControl(),
  godina_studija: new FormControl('',Validators.required),
  ciklus: new FormControl('',Validators.required),
  uspjeh: new FormControl('',Validators.required),
  broj_clanova: new FormControl('',Validators.required),
  invalidnost_roditelja: new FormControl(false),
  bolest_clanova_bez_rjesenja: new FormControl(false),
  student_bez_jednog_roditelja: new FormControl(false),
  student_neutvrdenog_ocinstva: new FormControl(false),
  rastavljeni_samohrani_roditelj: new FormControl(false),
  broj_studenata_iz_domacinstva: new FormControl('',Validators.required),
  broj_ucenika: new FormControl('',Validators.required),
  mjesecni_prihod: new FormControl('',Validators.required),
  }),
})

unosStudenta(){
  this.noviStudent = {
    ime: this.ime?.value,
    fakultet: this.fakultet?.value,
    prezime: this.prezime?.value,
    univerzitet: this.univerzitet?.value,
    deficitarno_zanimanje: this.deficitarno_zanimanje?.value === null? true: false,
    prijava_bez_bodovanja: this.prijava_bez_bodovanja?.value === null? true: false,
    kriterij_jednake_vaznosti: 0,
    kriterij_tezinska_vrijednost: 0,
    kriteriji: {
      godina_studija: this.godina_studija?.value,
      ciklus: this.ciklus?.value,
      uspjeh: this.uspjeh?.value,
      broj_clanova: this.broj_clanova?.value,
      invalidnost_roditelja: this.invalidnost_roditelja?.value === null? true: false,
      bolest_clanova_bez_rjesenja:  this.bolest_clanova_bez_rjesenja?.value === null? true: false,
      student_bez_jednog_roditelja: this.student_bez_jednog_roditelja?.value === null? true: false,
      student_neutvrdenog_ocinstva: this.student_neutvrdenog_ocinstva?.value === null? true: false,
      rastavljeni_samohrani_roditelj: this.rastavljeni_samohrani_roditelj?.value === null? true: false,
      broj_studenata_iz_domacinstva: this.broj_studenata_iz_domacinstva?.value,
      broj_ucenika: this.broj_ucenika?.value,
      mjesecni_prihod: this.mjesecni_prihod?.value
    }
  }
  this.studentServis.setStudent(this.noviStudent).subscribe({
next: () =>{},
error: () => {},
complete: () => {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Student je uspješno dodan u listu studenata!' });
  console.log("Ispis studenta iz funkcije unosa:", this.noviStudent)
}
  })
  this.studetForm.reset();
  
}

resetForm(){
  this.studetForm.reset();
}

get ime() {return this.studetForm.get('student')?.get('ime');}
get ciklus() {return this.studetForm.get('student')?.get('ciklus');}
get prezime() {return this.studetForm.get('student')?.get('prezime');}
get univerzitet() {return this.studetForm.get('student')?.get('univerzitet');}
get fakultet() {return this.studetForm.get('student')?.get('fakultet');}
get prijava_bez_bodovanja() {return this.studetForm.get('student')?.get('prijava_bez_bodovanja');}
get deficitarno_zanimanje() {return this.studetForm.get('student')?.get('deficitarno_zanimanje');}
get kriteriji() {return this.studetForm.get('student')?.get('kriteriji');}
get godina_studija() {return this.studetForm.get('student')?.get('godina_studija');}
get uspjeh() {return this.studetForm.get('student')?.get('uspjeh');}
get broj_clanova() {return this.studetForm.get('student')?.get('broj_clanova');}
get invalidnost_roditelja() {return this.studetForm.get('student')?.get('invalidnost_roditelja');}
get bolest_clanova_bez_rjesenja() {return this.studetForm.get('student')?.get('bolest_clanova_bez_rjesenja');}
get student_bez_jednog_roditelja() {return this.studetForm.get('student')?.get('student_bez_jednog_roditelja');}
get student_neutvrdenog_ocinstva() {return this.studetForm.get('student')?.get('student_neutvrdenog_ocinstva');}
get rastavljeni_samohrani_roditelj() {return this.studetForm.get('student')?.get('rastavljeni_samohrani_roditelj');}
get broj_studenata_iz_domacinstva() {return this.studetForm.get('student')?.get('broj_studenata_iz_domacinstva');}
get broj_ucenika() {return this.studetForm.get('student')?.get('broj_ucenika');}
get mjesecni_prihod() {return this.studetForm.get('student')?.get('mjesecni_prihod');}
}
