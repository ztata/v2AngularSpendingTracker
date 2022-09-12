import { Component, OnInit } from '@angular/core';
import {  UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ITransaction } from 'src/app/Interfaces/ITransaction';

@Component({
  selector: 'app-spendy',
  templateUrl: './spendy.component.html',
  styleUrls: ['./spendy.component.scss']
})
export class SpendyComponent implements OnInit {

  constructor(private builder: UntypedFormBuilder) {}

  totalFunds: number = 0;
  expenses: number = 0;
  paychecks: number = 0;
  buttonText: string = "Enter a Transaction";
  displayTransactionPanel: boolean = false;
  validationForm: any;
  transactionRecord: any = [];
  currentTransaction: ITransaction | any;


  ngOnInit(): void {
    this.validationForm = this.builder.group({
      name: new UntypedFormControl('', [Validators.required]),
      amount: new UntypedFormControl(0, [Validators.required, ]),
      income: new UntypedFormControl(false, []),
      type: new UntypedFormControl()
    });
    
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

  submitForm(){
    console.log(this.income.value)
  }

  get name(){return this.validationForm.get('name')}
  get amount(){return this.validationForm.get('amount')}
  get income(){return this.validationForm.get('income')}
  get type(){return this.validationForm.get('type')}


  setType(){
    if(this.income.value === true){
      this.type.setValue('Income');
    } else{
      this.type.setValue('Expense');
    }
  }

  addTransaction(){
    console.log("form submitted")
    console.log(this.validationForm.value);
    if(this.income.value === true){
      this.totalFunds += this.amount.value;
      this.paychecks += this.amount.value;
      this.setType();
    }
    else{
      this.totalFunds -= this.amount.value;
      this.expenses -= this.amount.value;
      this.setType();
    }

    this.updateTransactionRecord();
    this.validationForm.reset();
  }

  updateTransactionRecord(){
    this.currentTransaction = {
      name: this.name.value,
      income: this.income.value,
      amount: this.amount.value,
      type: this.type.value
    };
    this.transactionRecord.push(this.currentTransaction);
    }

}
