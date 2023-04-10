import { Component } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { MessageService } from 'primeng/api';
import { Student, Student2 } from 'src/app/shared/models/student';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rangiranje-tezinski',
  templateUrl: './rangiranje-tezinski.component.html',
  styleUrls: ['./rangiranje-tezinski.component.css']
})
export class RangiranjeTezinskiComponent {
  studentiPom: Student[] = [];
  sviStudenti: Student2[] = [];
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
        this.studentiPom = resp;
      },
      error: (e) =>{
      },
      complete: () =>{
      }
    }
    )
    this.studentServis.getStudents2().subscribe({
      next: (resp) => {
        this.sviStudenti = resp;
        
      },
      error: (e) =>{

      },
      complete: () =>{
                this.sviStudenti.map(e =>{e.kriteriji.invalidnost_roditelja = Number(e.kriteriji.invalidnost_roditelja),
                  e.kriteriji.bolest_clanova_bez_rjesenja = Number(e.kriteriji.bolest_clanova_bez_rjesenja),
                  e.kriteriji.rastavljeni_samohrani_roditelj = Number(e.kriteriji.rastavljeni_samohrani_roditelj),
                  e.kriteriji.student_bez_jednog_roditelja = Number(e.kriteriji.student_bez_jednog_roditelja)
                  e.kriteriji.student_neutvrdenog_ocinstva = Number(e.kriteriji.student_neutvrdenog_ocinstva)
              }) 
              console.log("ispis svih studenata:", this.sviStudenti);
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
  mnozenjeElemenataSaProsjecnomVrijednoscu(){
    for (let i = 0; i < this.sviStudenti.length; i++) {
      this.sviStudenti[i].kriteriji.godina_studija = this.sviStudenti[i].kriteriji.godina_studija * this.prosjecneVrijednosti[0];
      this.sviStudenti[i].kriteriji.uspjeh = this.sviStudenti[i].kriteriji.uspjeh * this.prosjecneVrijednosti[1];
      this.sviStudenti[i].kriteriji.broj_clanova = this.sviStudenti[i].kriteriji.broj_clanova * this.prosjecneVrijednosti[2];
      this.sviStudenti[i].kriteriji.invalidnost_roditelja = Number(this.sviStudenti[i].kriteriji.invalidnost_roditelja) * this.prosjecneVrijednosti[3]; 
      this.sviStudenti[i].kriteriji.bolest_clanova_bez_rjesenja = Number(this.sviStudenti[i].kriteriji.bolest_clanova_bez_rjesenja) * this.prosjecneVrijednosti[4];
      this.sviStudenti[i].kriteriji.student_bez_jednog_roditelja = Number(this.sviStudenti[i].kriteriji.student_bez_jednog_roditelja) * this.prosjecneVrijednosti[5];
      this.sviStudenti[i].kriteriji.student_neutvrdenog_ocinstva = Number(this.sviStudenti[i].kriteriji.student_neutvrdenog_ocinstva) * this.prosjecneVrijednosti[6];
      this.sviStudenti[i].kriteriji.rastavljeni_samohrani_roditelj = Number(this.sviStudenti[i].kriteriji.rastavljeni_samohrani_roditelj) * this.prosjecneVrijednosti[7];
      this.sviStudenti[i].kriteriji.broj_studenata_iz_domacinstva = this.sviStudenti[i].kriteriji.broj_studenata_iz_domacinstva * this.prosjecneVrijednosti[8];
      this.sviStudenti[i].kriteriji.broj_ucenika = this.sviStudenti[i].kriteriji.broj_ucenika * this.prosjecneVrijednosti[9];
      this.sviStudenti[i].kriteriji.mjesecni_prihod = this.sviStudenti[i].kriteriji.mjesecni_prihod * this.prosjecneVrijednosti[10];
      this.sviStudenti[i].kriteriji.ciklus = this.sviStudenti[i].kriteriji.ciklus * this.prosjecneVrijednosti[11];
    }
    this.vrijednostAlternativa()
    console.log("ispis svih studenata sa pomnozenim elemntima prosjecne vrijednosti: ", this.sviStudenti)
  }
  vrijednostAlternativa(){
    //izracun sume redova za svaku od alternativa
    for(let i =0; i< this.sviStudenti.length; i++)
    {
      this.sviStudenti[i].kriterij_tezinska_vrijednost = 
      this.sviStudenti[i].kriteriji.godina_studija+
      this.sviStudenti[i].kriteriji.uspjeh +
      this.sviStudenti[i].kriteriji.broj_clanova +
      this.sviStudenti[i].kriteriji.invalidnost_roditelja +
      this.sviStudenti[i].kriteriji.bolest_clanova_bez_rjesenja + 
      this.sviStudenti[i].kriteriji.student_bez_jednog_roditelja  +
      this.sviStudenti[i].kriteriji.student_neutvrdenog_ocinstva +
      this.sviStudenti[i].kriteriji.rastavljeni_samohrani_roditelj +
      this.sviStudenti[i].kriteriji.broj_studenata_iz_domacinstva +
      this.sviStudenti[i].kriteriji.broj_ucenika +
      this.sviStudenti[i].kriteriji.mjesecni_prihod + 
      this.sviStudenti[i].kriteriji.ciklus;
    }
    this.updateStudetBaza()
  }
  
  updateStudetBaza(){
    for(let i = 0; i< this.sviStudenti.length; i++){
      this.studentiPom[i].kriterij_tezinska_vrijednost = this.sviStudenti[i].kriterij_tezinska_vrijednost;
    }
    console.log("Poziva se funkcija update Baze")
     for(let i = 0; i< this.studentiPom.length; i++){
      this.studentServis.updateStudent(this.studentiPom[i], this.studentiPom[i].id ).subscribe({
        next: () => {},
        error: () => {},
        complete: () => {}
        })
      }
   } 
}
