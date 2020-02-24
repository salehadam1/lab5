import { Component, OnInit } from '@angular/core';
import{InterestService}from'../services/interest.service';
@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  constructor(private service:InterestService) { }

  ngOnInit(): void {
  }

  Total: number; 
  Amount: number = 5000; 
  interestRate: number = 0.01; 
  annualCompound: number = 1; 
  years: number;
calaulateinterest(): void { 

  this.Total = this.service.calaulateinterest(this.years);
}
}

