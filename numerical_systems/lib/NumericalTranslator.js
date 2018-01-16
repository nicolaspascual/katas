class NumericalTranslator {
    constructor(to_translate) {
        this.roman = {
            alphabet: ['M', 'D', 'C', 'L', 'X', 'V', 'I'],
            values: [1000, 500, 100, 50, 10, 5, 1]
        };
        this.to_translate = to_translate;
    }


    to_roman() {
        let roman_number = ''
        let yet_to_translate = this.to_translate;
        while (yet_to_translate !== 0) {
            for (let index in this.roman.values) {
                let value = this.roman.values[index];
                let n_times = Math.floor(yet_to_translate / value);
                if (n_times > 0) {
                    if (n_times <= 3)
                        roman_number += this.roman.alphabet[index].repeat(n_times);
                    else
                        roman_number += (this.roman.alphabet[index].repeat(n_times % 3) +  this.roman.alphabet[index - 1]);

                    yet_to_translate -= n_times * value;
                }
            }
        }

        return roman_number;
    }
}
module.exports = NumericalTranslator;