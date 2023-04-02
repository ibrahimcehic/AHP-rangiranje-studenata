import { BolestClanovaBezRjInvalidnosti, BrojClanova, BrojStudenataIzDomacinstva, BrojUcenika, GodinaStudija, InvalidnostRoditelja, MjesecniPrihod, RastavljeniSamohraniRoditelj, StudentBezJednogRoditelja, StudentNeutvrdjenogOcinstva, Uspjeh } from "./kriteriji";

export interface Student{
    ime: string;
    prezime: string;
    univerzitet: string;
    fakultet: string;
    prijava_bez_bodovanja?: boolean;
    deficitarno_zanimanje?: boolean;
    kriteriji: Kriteriji;
}
export interface Kriteriji{
    godina_studija: GodinaStudija;
    uspjeh: Uspjeh;
    broj_clanova: BrojClanova;
    invalidnost_roditelja: InvalidnostRoditelja;
    bolest_clanova_bez_rjesenja: BolestClanovaBezRjInvalidnosti;
    student_bez_jednog_roditelja: StudentBezJednogRoditelja;
    student_neutvrdenog_ocinstva: StudentNeutvrdjenogOcinstva;
    rastavljeni_samohrani_roditelj: RastavljeniSamohraniRoditelj;
    broj_studenata_iz_domacinstva: BrojStudenataIzDomacinstva;
    broj_ucenika: BrojUcenika;
    mjesecni_prihod:MjesecniPrihod;
}
