import { Component } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/shared/models/student';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rangiranje-tezinski',
  templateUrl: './rangiranje-tezinski.component.html',
  styleUrls: ['./rangiranje-tezinski.component.css']
})
export class RangiranjeTezinskiComponent {
  sviStudenti: Student[] = [];
  kriterijiArray: string[] = [];
  odnosMatrica: number[][] = [];
  sumaKolona: number[] = [];
  normaliziranaMatrica: number[][] = [];
  prosjecneVrijednosti: number[] = [];

  constructor(private fb: FormBuilder, private studentServis: StudentService, private messageService: MessageService) {}
  ngOnInit(): void {
    this.kriterijiArray = ['wgs', 'wu','wbčd','wir','wbčbi','wsbr','wno','wrsr','wbsd','wbu','wppč','ciklus'];
    this.getAllStudents();
    this.odnosMatrica = [[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],]
   this.spremiTezineUniz();
   
    console.log("ispis niza brojeva:", this.odnosMatrica)
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

  trackByFn(index:number)
   {
    return index;  
  }
  postaviReciprocnu(i: number, j:number){
    this.odnosMatrica[j][i] = 1/this.odnosMatrica[i][j];
    this.izracunajSumuKolona();
    this.updateTezina(this.odnosMatrica);
  }
  disableCheck(i: number, j:number){
    if(j <= i){
    return true;
    }
    return false;
  }
  izracunajSumuKolona(){
    this.sumaKolona.forEach(e => e=0);
    console.log("ispis pocetne sume kolona: ", this.sumaKolona)
    let suma: number = 0;
    for (let i = 0; i < 12; i++) {
      for (let j= 0; j < 12; j++) {
        suma += this.odnosMatrica[j][i];
      }
      this.sumaKolona[i] = suma;
      suma = 0;
    }
    this.normaliziranaMatrica = JSON.parse(JSON.stringify(this.odnosMatrica));
    console.log("ispis sume kolona: ", this.sumaKolona)
    this.normalizacijaMatrice();
  }
  normalizacijaMatrice(){
    for (let i = 0; i < 12; i++) {
      for (let j= 0; j < 12; j++) {
        this.normaliziranaMatrica[i][j] = (this.normaliziranaMatrica[i][j])/this.sumaKolona[j];
      }
    }
    console.log("ispis normalizirane matrice: ", this.normaliziranaMatrica);
    this.izracunajProsjecneVrijednosti();
  }
  izracunajProsjecneVrijednosti(){
    let suma: number = 0;
    for (let i = 0; i < 12; i++) {
      for (let j= 0; j < 12; j++) {
        suma += this.normaliziranaMatrica[i][j];
      }
      this.prosjecneVrijednosti[i] = suma/12;
      suma = 0;
    }
    console.log("Prosjecna vrijednost: ", this.prosjecneVrijednosti);
  }

  spremiTezineUniz(){
    this.studentServis.getCriteriaWeight().subscribe({
      next: (res) => {
        for(let i = 0; i<12; i++){
          this.odnosMatrica[i] = res[i];
        }
        console.log("Ispis responsa sa getcriteria weight: ",res[0] )
        console.log("Ispis matrice: ",this.odnosMatrica[0] )
      },
      error: () => {},
      complete: () => {
        for (let i = 0; i < 12; i++) {
          this.odnosMatrica[i][i] = 1;
           this.sumaKolona.push(0);
           this.prosjecneVrijednosti.push(0);
         }
        this.izracunajSumuKolona();
      }
    })
  }
  updateTezina(list: number[][]){
    this.studentServis.updateCriteriaWeight(list).subscribe({
      next: (r) =>{console.log("Azurira se lista: ",r)},
      error: () => {},
      complete: () =>{}
    })
  }
}
