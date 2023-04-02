import { NonNullableFormBuilder } from "@angular/forms";

export interface GodinaStudija{
    godina_studija: number;
    ciklus: number;
    godina_studija_weight: number;
}
export interface Uspjeh{
    uspjeh: number;
    uspjeh_weight: number;
}
export interface BrojClanova{
    broj_clanova: number;
    broj_clanova_weight: number;
}
export interface InvalidnostRoditelja{
    invalidnost_roditelja: number;
    invalidnost_roditelja_weight: number;
}
export interface BolestClanovaBezRjInvalidnosti{
    bolest_clanova_bez_rjesenja: number;
    bolest_clanova_bez_rjesenja_weight: number;
}
export interface StudentBezJednogRoditelja{
    student_bez_jednog_roditelja: boolean;
    student_bez_jednog_roditelja_weight: number;
}
export interface StudentNeutvrdjenogOcinstva{
    student_neutvrdenog_ocinstva: boolean;
    student_neutvrdenog_ocinstva_weight: number;
}
export interface RastavljeniSamohraniRoditelj{
    rastavljeni_samohrani_roditelj: boolean;
    rastavljeni_samohrani_roditelj_weight: number;
}
export interface BrojStudenataIzDomacinstva{
    broj_studenata_iz_domacinstva: number;
    broj_studenata_iz_domacinstva_weight: number;
}
export interface BrojUcenika{
    broj_ucenika: number;
    broj_ucenika_weight: number;
}
export interface MjesecniPrihod{
    mjesecni_prihod:number;
    mjesecni_prihod_weight: number;
}