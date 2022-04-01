import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { PasswordStrength } from './password-strength.enum';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent implements OnChanges {
  @Input()
  public password: string | null = null;

  public strength: PasswordStrength | null = null;

  public ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    if (changes?.password.currentValue === '') {
      this.strength = null;
    } else {
      this.strength = this.getStrength(changes?.password.currentValue);
    }
  }

  private getStrength(pass: string): PasswordStrength {
    if (pass.trim() === '') {
      return PasswordStrength.Weak;
    }
    const lenScore: number = this.getScoreFromLength(pass);
    const complexityScore: number = this.getScoreFromComplexity(pass);
    const totalScore = lenScore + complexityScore;

    if (totalScore >= 70) {
      return PasswordStrength.Strong;
    } else if (totalScore > 33 && totalScore < 70) {
      return PasswordStrength.Average;
    } else {
      return PasswordStrength.Weak;
    }
  }

  private getScoreFromLength(pass: string): number {
    if (pass.trim().length === 0) {
      return 0;
    }

    let score: number = 0;
    const letters: { [key: string]: number } = {};

    pass.split('').forEach((char) => {
      letters[char] = (letters[char] || 0) + 1;
      score += 5.0 / letters[char];
    });

    return Math.trunc(score);
  }

  private getScoreFromComplexity(pass: string): number {
    if (pass.trim().length === 0) {
      return 0;
    }

    let score: number = 0;
    let variations: any = {
      digits: /\d/.test(pass),
      lower: /[a-z]/.test(pass),
      upper: /[A-Z]/.test(pass),
      nonWords: /\W/.test(pass),
    };

    let variationCount = 0;

    for (let check in variations) {
      variationCount += variations[check] ? 1 : 0;
    }

    score += (variationCount - 1) * 10;

    return Math.trunc(score);
  }
}
