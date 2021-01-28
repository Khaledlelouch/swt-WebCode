export class Patient{
  private  id: number;
  // tslint:disable-next-line:ban-types
  private vorname: String;
  // tslint:disable-next-line:ban-types
  private nachname: String;
  private geburtstag: Date;
  private  einzugsDatum: Date;
  // tslint:disable-next-line:ban-types
  private  strasse: String;
  private hausnr: number;
  private  postleitzahl: number;
  // tslint:disable-next-line:ban-types
  private ort: String;
  private mobilnummer: number;
  // tslint:disable-next-line:ban-types
  private  allergien: String[];
  // tslint:disable-next-line:ban-types
  private  ernaehrungstyp: String;
  private stationNr: number;
  private zimmerNr: number;
  // tslint:disable-next-line:ban-types
  private erkrankung: String;
  constructor(){

  }
}
