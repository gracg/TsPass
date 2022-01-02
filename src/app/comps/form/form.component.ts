import { Component, OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/service/generator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private service :GeneratorService;

  /*
      Options for the slider and number input
  */
  private pwLength: number =12;
  private pwMin: number=5;
  private pwMax: number=100;
  private pwStep: number=1;
  
  
  private isUpperCase: boolean = true;
  private isLowerCase: boolean = true;
  private isNumbers: boolean = true;
  private isSymbols: boolean = true;

  private password :string="";

  constructor(service : GeneratorService) {
    this.service=service;
    this.password=this.service.GeneratePassword(this);
  }

  private genPW():void {
    this.password=this.service.GeneratePassword(this);
  }


  /*
    x is Checkbox event change
  */
  public parseBoolean(x :any,optionChanged :string): void {
    let b :boolean = x.currentTarget.checked;
    if(optionChanged=="uppercase"){this.setIsUpperCase(b);}
    if(optionChanged=="lowercase"){this.setIsLowerCase(b);}
    if(optionChanged=="numbers"){this.setIsNumbers(b);}
    if(optionChanged=="symbols"){this.setIsSymbols(b);}
  }

  getPassword(): string {return this.password;}

  getIsUpperCase(): boolean {return this.isUpperCase;}
  setIsUpperCase(b:boolean): void {this.isUpperCase=b;this.genPW();}

  getIsLowerCase(): boolean {return this.isLowerCase;}
  setIsLowerCase(b:boolean): void {this.isLowerCase=b;this.genPW();}

  getIsNumbers(): boolean {return this.isNumbers;}
  setIsNumbers(b:boolean): void {this.isNumbers=b;this.genPW();}

  getIsSymbols(): boolean {return this.isSymbols;}
  setIsSymbols(b:boolean): void {this.isSymbols=b;this.genPW();}

  getPwMax() :string {return this.pwMax.toString();}
  setPwMax(value:string) :void {this.pwMax=Number(value);this.genPW();}

  getPwMin(): string {return this.pwMin.toString();}
  setPwMin(value: string) {this.pwMin=Number(value);this.genPW();}

  getPwStep(): string {return this.pwStep.toString();}
  setPwStep(value: string) {this.pwStep=Number(value);this.genPW();}

  getPwLength(): string {return this.pwLength.toString();}
  setPwLength(value: string) {this.pwLength=Number(value);this.genPW();}

  ngOnInit(): void {
  }

}
