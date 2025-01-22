import {Component, EventEmitter, Output} from '@angular/core';
import {InvestmentInput} from "../investment-input.model";
import {InvestmentService} from "../investment.service";


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  constructor(
    private readonly investmentService: InvestmentService
  ) {
  }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: Number(this.enteredInitialInvestment),
      annualInvestment: Number(this.enteredAnnualInvestment),
      expectedReturn: Number(this.enteredExpectedReturn),
      duration: Number(this.enteredDuration),
    });
    this.enteredInitialInvestment = '0'
    this.enteredAnnualInvestment = '0'
    this.enteredExpectedReturn = '5'
    this.enteredDuration = '10'
  }
}
