import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-spendy',
  templateUrl: './spendy.component.html',
  styleUrls: ['./spendy.component.scss']
})
export class SpendyComponent implements OnInit {

  constructor() { 
    this.validationForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required)
    });
  }

  totalFunds: number = 0;
  buttonText: string = "Enter a Transaction";
  displayTransactionPanel: boolean = false;
  validationForm: FormGroup;


  ngOnInit(): void {
    
  }

  displayTransaction(){
    this.displayTransactionPanel = !this.displayTransactionPanel;
    if(this.displayTransactionPanel === true){
      this.buttonText = "I'm All Set!";
    }
    else{
      this.buttonText = "Enter a Transaction";
    }
  }

  get name(): AbstractControl{
    return this.validationForm.get('name')!;
  }

  get amount(): AbstractControl{
    return this.validationForm.get('name')!;
  }

  get type(): AbstractControl{
    return this.validationForm.get('name')!;
  }

  get date(): AbstractControl{
    return this.validationForm.get('name')!;
  }

}
