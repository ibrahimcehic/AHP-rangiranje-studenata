export interface Student{
    id?: number | null;
    ime: string;
    prezime: string;
    univerzitet: string;
    fakultet: string;
    prijava_bez_bodovanja?: boolean;
    deficitarno_zanimanje?: boolean;
    kriteriji: KriterijiValue;
    kriterij_jednake_vaznosti: number;
    kriterij_tezinska_vrijednost: number;
}
export interface KriterijiValue{
    godina_studija: number;
    ciklus:number;
    uspjeh: number;
    broj_clanova: number;
    invalidnost_roditelja: boolean;
    bolest_clanova_bez_rjesenja: boolean;
    student_bez_jednog_roditelja: boolean;
    student_neutvrdenog_ocinstva: boolean;
    rastavljeni_samohrani_roditelj: boolean;
    broj_studenata_iz_domacinstva: number;
    broj_ucenika: number;
    mjesecni_prihod:number;
}
export interface Student2{
    id?: number | null;
    ime: string;
    prezime: string;
    univerzitet: string;
    fakultet: string;
    prijava_bez_bodovanja?: boolean;
    deficitarno_zanimanje?: boolean;
    kriteriji: KriterijiValueNumber;
    kriterij_jednake_vaznosti: number;
    kriterij_tezinska_vrijednost: number;
}
export interface KriterijiValueNumber{
    godina_studija: number;
    ciklus:number;
    uspjeh: number;
    broj_clanova: number;
    invalidnost_roditelja: number;
    bolest_clanova_bez_rjesenja: number;
    student_bez_jednog_roditelja: number;
    student_neutvrdenog_ocinstva: number;
    rastavljeni_samohrani_roditelj: number;
    broj_studenata_iz_domacinstva: number;
    broj_ucenika: number;
    mjesecni_prihod:number;
}