class Encryptor {
    constructor(text, gap) {
        this.ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
        this.ENCRYPT = true;
        this.DECRYPT = false;
        this.text = text;
        this.gap = gap;
    }


    encrypt() {
        return this._perform_shift(this._calculate_index(this.ENCRYPT));
    }

    decrypt() {
        return this._perform_shift(this._calculate_index(this.DECRYPT));
    }


    _perform_shift(new_index_calculator) {
        return this.text.split('').map((letter) => {
            let is_upper = letter === letter.toUpperCase();
            let encrypted_letter = letter.toLowerCase();

            if (this.ALPHABET.includes(encrypted_letter))
                encrypted_letter = this.ALPHABET[new_index_calculator(encrypted_letter)];

            return (is_upper) ? encrypted_letter.toUpperCase() : encrypted_letter;
        }).join('');
    }



    _calculate_index(encrypt) {
        if (encrypt)
            return (letter) => (this.ALPHABET.indexOf(letter) + this.gap) % this.ALPHABET.length;
        else
            return (letter) => {
                let removed_gap_index = (this.ALPHABET.indexOf(letter) - this.gap);
                if (removed_gap_index < 0)
                    return removed_gap_index % this.ALPHABET.length + this.ALPHABET.length ;
                else
                    return removed_gap_index % this.ALPHABET.length;
            };
    }
}


module.exports = Encryptor;