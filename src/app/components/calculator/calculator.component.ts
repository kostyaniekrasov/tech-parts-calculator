import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  goldenValue = 0;
  violetValue = 0;
  blueValue = 0;

  violet1Value = 0;
  violet2Value = 0;

  gold1Value = 0;
  gold2Value = 0;
  gold3Value = 0;

  missingGold = 0;
  missingViolet = 0;
  missingBlue = 0;

  result = 0;

  calculate() {
    const {
      goldenValue,
      violetValue,
      blueValue,
      violet1Value,
      violet2Value,
      gold1Value,
      gold2Value,
      gold3Value,
    } = this;
    const totalViolet = violetValue + violet1Value * 2 + violet2Value * 4;
    const totalGolden =
      goldenValue +
      gold1Value * 2 +
      gold2Value * 4 +
      gold3Value * 8 +
      Math.floor(totalViolet / 8) +
      Math.floor(blueValue / 24);

    this.result = Math.floor(totalGolden / 16);

    const remainingGolden = totalGolden % 16;

    this.missingGold = 16 - remainingGolden;
    this.missingViolet = this.missingGold * 8;
    this.missingBlue = this.missingViolet * 3;
  }
}
