import { NgClass, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    NgForOf,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculator';
  display = ' ';
  result= ' ';
  isDarkMode=false;
  showHistory=false;
  lastOperations: string[]= [];



toggleHistory(){
  this.showHistory= !this.showHistory;
}

toggleTheme(){
  this.isDarkMode= !this.isDarkMode;
}

addOperationToHistory(operation: string) {
  this.lastOperations.unshift(operation);
  if (this.lastOperations.length > 3) {
    this.lastOperations.pop();
  }
}


calculate(){
  try {
    /*this.result = eval(this.display).toString();
    this.lastOperations.push(parseFloat(this.result));
  } catch (e) {
    this.result = 'Error';
  }*/
    this.result = eval(this.display.replace('×', '*').replace('÷', '/')).toString();
      this.addOperationToHistory(this.display + ' = ' + this.result);
    } catch (e) {
      this.result = 'Error';
    }
    
  }

  appendNumber(num: number){
    if (this.display === ' ') {
      this.display = String(num);
    } else {
      this.display += String(num);
    }
  }

  appendOperator(operator: string){
    this.display += ' ' + operator + ' ';
    /* 
    if (this.display === '0' && operator !== '+/-' && operator !== '×' && operator !== '÷') {
      return; // Eğer ekran değeri 0 ise ve eklenen operatör değiştirme işlemi değilse, işlem yapma
    }

    const lastChar = this.display[this.display.length - 1];
    if (['+', '-', '×', '÷'].includes(lastChar) && ['+', '-', '×', '÷'].includes(operator)) {
      this.display = this.display.slice(0, -1) + operator;
    } else {
      this.display += operator;
    }*/
  }

  clear(){
    this.display=' ';
    this.result =' ';
  }

  toggleSing(){
    if (this.display==='0')
      this.display='0';
    else if(this.display.startsWith('-'))
      this.display =this.display.substring(1);
    else
    this.display ='-' + this.display;
  }

  appendZeroes(num : number){
    if (this.display !== '0') {
      this.display += '00';
    }else{
      return;
    }
  }


}
