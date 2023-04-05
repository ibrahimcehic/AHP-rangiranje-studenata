import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/shared/models/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-rangiranje-jednake-vaznosti',
  templateUrl: './rangiranje-jednake-vaznosti.component.html',
  styleUrls: ['./rangiranje-jednake-vaznosti.component.css']
})
export class RangiranjeJednakeVaznostiComponent implements OnInit{

  sviStudenti: Student[] = [];
  kriterijiKoristi: Student[] = [];
  normalizacijaKriterija: Student[] = [];
  rangListaBezTezinska: Student[] = [];

constructor(private studentServis: StudentService, private messageService: MessageService) {}
  ngOnInit(): void {
    this.getAllStudents()
  }
  getAllStudents(){
    this.studentServis.getStudents().subscribe({
      next: (resp) => {
        this.sviStudenti = resp;
        this.rangListaBezTezinska = JSON.parse(JSON.stringify(this.sviStudenti));
        this.kriterijiKoristi = JSON.parse(JSON.stringify(this.sviStudenti));
        console.log("ispis svih studenata:", this.sviStudenti);
      },
      error: (e) =>{

      },
      complete: () =>{
        this.kriterijiKoristiProracun()
        this.normalizacijaVrijednostiKriterija()
        this.rangiranjeJednakeVaznosti()
      }
    }
      
    )
  }
 kriterijiKoristiProracun(){
  for (let i = 0; i < this.sviStudenti.length; i++) {
    this.kriterijiKoristi[i].kriteriji.mjesecni_prihod = 1/(this.sviStudenti[i].kriteriji.mjesecni_prihod);
  }
  console.log("ispis svih studenata kriteiji koristi:", this.kriterijiKoristi);
  this.normalizacijaKriterija = JSON.parse(JSON.stringify(this.kriterijiKoristi));
 }
 normalizacijaVrijednostiKriterija(){
  let maxBolest: number = Math.max(...this.kriterijiKoristi.map(o => Number(o.kriteriji.bolest_clanova_bez_rjesenja)));
  let maxBrojClanova: number = Math.max(...this.kriterijiKoristi.map(o => Number(o.kriteriji.broj_clanova)));
  let maxBrojStudenata: number = Math.max(...this.kriterijiKoristi.map(o => Number(o.kriteriji.broj_studenata_iz_domacinstva)));
  let maxBrojUcenika: number = Math.max(...this.kriterijiKoristi.map(o => Number(o.kriteriji.broj_ucenika)));
  let maxCiklus: number = Math.max(...this.kriterijiKoristi.map(o => Number(o.kriteriji.ciklus)));
  let maxGodStudija: number = Math.max(...this.kriterijiKoristi.map(o => Number(o.kriteriji.godina_studija)));
  let maxInvRoditelja: number = Math.max(...this.kriterijiKoristi.map(o => Number(o.kriteriji.invalidnost_roditelja)));
  let maxMjesecniPrihod: number = Math.max(...this.kriterijiKoristi.map(o => Number(o.kriteriji.mjesecni_prihod)));
  let maxRastSamoRod: number = Math.max(...this.kriterijiKoristi.map(o => Number(o.kriteriji.rastavljeni_samohrani_roditelj)));
  let maxStudBezRodit: number = Math.max(...this.kriterijiKoristi.map(o => Number(o.kriteriji.student_bez_jednog_roditelja)));
  let maxStudOcinstva: number = Math.max(...this.kriterijiKoristi.map(o => Number(o.kriteriji.student_neutvrdenog_ocinstva)));
  let maxUspjeh: number = Math.max(...this.kriterijiKoristi.map(o => Number(o.kriteriji.uspjeh)));


  for (let i = 0; i < this.normalizacijaKriterija.length; i++) {
    this.normalizacijaKriterija[i].kriteriji.bolest_clanova_bez_rjesenja = Boolean(Number(this.normalizacijaKriterija[i].kriteriji.bolest_clanova_bez_rjesenja) / maxBolest);
    this.normalizacijaKriterija[i].kriteriji.broj_clanova = (Number(this.normalizacijaKriterija[i].kriteriji.broj_clanova) / maxBrojClanova);
    this.normalizacijaKriterija[i].kriteriji.broj_studenata_iz_domacinstva = (Number(this.normalizacijaKriterija[i].kriteriji.broj_studenata_iz_domacinstva) / maxBrojStudenata);
    this.normalizacijaKriterija[i].kriteriji.broj_ucenika = (Number(this.normalizacijaKriterija[i].kriteriji.broj_ucenika) / maxBrojUcenika);
    this.normalizacijaKriterija[i].kriteriji.ciklus = (Number(this.normalizacijaKriterija[i].kriteriji.ciklus) / maxCiklus);
    this.normalizacijaKriterija[i].kriteriji.godina_studija = (Number(this.normalizacijaKriterija[i].kriteriji.godina_studija) / maxGodStudija);
    this.normalizacijaKriterija[i].kriteriji.uspjeh = (Number(this.normalizacijaKriterija[i].kriteriji.uspjeh) / maxUspjeh);
    this.normalizacijaKriterija[i].kriteriji.mjesecni_prihod = (Number(this.normalizacijaKriterija[i].kriteriji.mjesecni_prihod) / maxMjesecniPrihod);
    this.normalizacijaKriterija[i].kriteriji.invalidnost_roditelja = Boolean(Number(this.normalizacijaKriterija[i].kriteriji.invalidnost_roditelja) / maxInvRoditelja);
    this.normalizacijaKriterija[i].kriteriji.rastavljeni_samohrani_roditelj = Boolean(Number(this.normalizacijaKriterija[i].kriteriji.rastavljeni_samohrani_roditelj) / maxRastSamoRod);
    this.normalizacijaKriterija[i].kriteriji.student_bez_jednog_roditelja = Boolean(Number(this.normalizacijaKriterija[i].kriteriji.student_bez_jednog_roditelja) / maxStudBezRodit);
    this.normalizacijaKriterija[i].kriteriji.student_neutvrdenog_ocinstva = Boolean(Number(this.normalizacijaKriterija[i].kriteriji.student_neutvrdenog_ocinstva) / maxStudOcinstva);
  }
  console.log("normalizacija kriterija:", this.normalizacijaKriterija)
 }
 rangiranjeJednakeVaznosti(){
  for (let i = 0; i < this.rangListaBezTezinska.length; i++){
    this.sviStudenti[i].kriterij_jednake_vaznosti =  
   (Number(this.normalizacijaKriterija[i].kriteriji.bolest_clanova_bez_rjesenja) +
   this.normalizacijaKriterija[i].kriteriji.broj_clanova+
    this.normalizacijaKriterija[i].kriteriji.broj_studenata_iz_domacinstva+
   this.normalizacijaKriterija[i].kriteriji.broj_ucenika+
   this.normalizacijaKriterija[i].kriteriji.ciklus+
  this.normalizacijaKriterija[i].kriteriji.godina_studija+
  this.normalizacijaKriterija[i].kriteriji.uspjeh +
   this.normalizacijaKriterija[i].kriteriji.mjesecni_prihod +
    Number(this.normalizacijaKriterija[i].kriteriji.invalidnost_roditelja)+
    Number(this.normalizacijaKriterija[i].kriteriji.rastavljeni_samohrani_roditelj)+
   Number(this.normalizacijaKriterija[i].kriteriji.student_bez_jednog_roditelja)+
   Number(this.normalizacijaKriterija[i].kriteriji.student_neutvrdenog_ocinstva))
  }
  this.sviStudenti.sort((a,b) => (a.kriterij_jednake_vaznosti > b.kriterij_jednake_vaznosti) ? -1:1)
 }
}
