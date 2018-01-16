describe("NumericalTranslator", function () {
    var NumericalTranslator = require("../lib/NumericalTranslator");


    describe('#to_roman', () => {
        describe('given a round number', () => {
            it('should transform an arabic numer to roman', () => {
                expect(new NumericalTranslator(1).to_roman()).toBe('I');
                expect(new NumericalTranslator(5).to_roman()).toBe('V');
                expect(new NumericalTranslator(10).to_roman()).toBe('X');
                expect(new NumericalTranslator(50).to_roman()).toBe('L');
                expect(new NumericalTranslator(100).to_roman()).toBe('C');
                expect(new NumericalTranslator(500).to_roman()).toBe('D');
                expect(new NumericalTranslator(1000).to_roman()).toBe('M');
            });
        });
        describe('given a number that has to use a combination of roman symbols', () => {
            it('should transform an arabic numer to roman', () => {
                expect(new NumericalTranslator(2).to_roman()).toBe('II');
                expect(new NumericalTranslator(4).to_roman()).toBe('IV');
                expect(new NumericalTranslator(11).to_roman()).toBe('XI');
                expect(new NumericalTranslator(55).to_roman()).toBe('LV');
                expect(new NumericalTranslator(153).to_roman()).toBe('CLIII');
                expect(new NumericalTranslator(514).to_roman()).toBe('DXIV');
                expect(new NumericalTranslator(1111).to_roman()).toBe('MCXI');
            });
        });
    });
});