import { Injectable } from '@angular/core';
import { FormComponent } from '../comps/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {


  private lowercase :string ="abcdefghijklmnopqrstuvwxyz";
  private uppercase :string ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private numbers :string = "0123456789";
  private symbols :string = "~!@#$%^&*()_-+={[}]|\:;<,>.?/";

  constructor() { }

  public GeneratePassword(form :FormComponent) :string {
    let characters:string  = "";

    characters += form.getIsLowerCase()?this.lowercase:"";
    characters += form.getIsUpperCase()?this.uppercase:"";
    characters += form.getIsNumbers()?this.numbers:"";
    characters += form.getIsSymbols()?this.symbols:"";

    let length = Number(form.getPwLength())>Number(form.getPwMin())? Number(form.getPwLength()):Number(form.getPwMin());
    let result = "";

    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  }
}
