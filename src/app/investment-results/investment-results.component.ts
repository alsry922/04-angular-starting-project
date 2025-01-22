import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {InvestmentResult} from "./investment-results.model";
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  constructor(
    private readonly investmentService: InvestmentService
  ) {
  }

  get results() {
    return this.investmentService.resultsData;
  }

  trackByYear(index:number, result: InvestmentResult) {
    return result.year;
  }
}
