import Axios from "axios";

/**
 * INCOME:
 * {
 *  income: 130,000
 * }
 */

 /**
  * TAX BRACKET:
  * [{
  *   low: 0,
  *   high: 150000,
  *   rate: 2
  * }]
  */

class Tax {
    constructor(income, taxBracket){
        this.income = income;
        this.taxBracket = taxBracket;
    }

    calculate() {
        const totalTax = 0;
        const incomeToBeTaxed = this.income;

        if(this.income === 0 || this.income < 0){
            return {totalTax}
        }
        
        // Go backwards adding up necessary taxes
        for(var i = brackets.length; i >= 0; i--){
             if(incomeToBeTaxed > brackets[i].low){
                 // Rate is given to us as an integer so we need to turn it into a percentage
                 totalTax = totalTax + (incomeToBeTaxed * (brackets[i].rate / 100));
                 incomeToBeTaxed = brackets[i].low;
             }
        }

        return {totalTax};
    }
}

exports.handler = async () => {
    const data = await Axios.get("https://track-interview.s3.amazonaws.com/income_bracket.json");

    const tax = new Tax(data.income, data.taxBracket);

    const totalTax = tax.calculate();
    
}

export default Tax;