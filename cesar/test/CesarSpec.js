describe('Encryptor', () => {
    var Encryptor = require("../lib/Cesar");
    describe('#encrypt', () => {

        describe('when given a lowercase string', () => {
            describe('having a non overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('test', 1).encrypt()).toBe('uftu');
                    expect(new Encryptor('test', 18).encrypt()).toBe('lwkl');
                    expect(new Encryptor('test', 26).encrypt()).toBe('test');
                });
            });
            describe('having an overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('test', 27).encrypt()).toBe('uftu');
                    expect(new Encryptor('test', 44).encrypt()).toBe('lwkl');
                    expect(new Encryptor('test', 52).encrypt()).toBe('test');
                });
            });
        });

        describe('when given an uppercase string', () => {
            describe('having a non overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('TEST', 1).encrypt()).toBe('UFTU');
                    expect(new Encryptor('TEST', 18).encrypt()).toBe('LWKL');
                    expect(new Encryptor('TEST', 26).encrypt()).toBe('TEST');
                });
            });
            describe('having an overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('TEST', 27).encrypt()).toBe('UFTU');
                    expect(new Encryptor('TEST', 44).encrypt()).toBe('LWKL');
                    expect(new Encryptor('TEST', 52).encrypt()).toBe('TEST');
                });
            });
        });


        describe('when given a mixed string', () => {
            describe('having a non overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('tEsT', 1).encrypt()).toBe('uFtU');
                    expect(new Encryptor('tEsT', 18).encrypt()).toBe('lWkL');
                    expect(new Encryptor('tEsT', 26).encrypt()).toBe('tEsT');
                });
            });
            describe('having an overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('tEsT', 27).encrypt()).toBe('uFtU');
                    expect(new Encryptor('tEsT', 44).encrypt()).toBe('lWkL');
                    expect(new Encryptor('tEsT', 52).encrypt()).toBe('tEsT');
                });
            });
        });

        describe('when given a string with special characters', () => {
            describe('having a non overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('test!*-', 1).encrypt()).toBe('uftu!*-');
                    expect(new Encryptor('test!*-', 18).encrypt()).toBe('lwkl!*-');
                    expect(new Encryptor('test!*-', 26).encrypt()).toBe('test!*-');
                });
            });
            describe('having an overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('test!*-', 27).encrypt()).toBe('uftu!*-');
                    expect(new Encryptor('test!*-', 44).encrypt()).toBe('lwkl!*-');
                    expect(new Encryptor('test!*-', 52).encrypt()).toBe('test!*-');
                });
            });
        });
    });


    describe('#decrypt', () => {

        describe('when given a lowercase string', () => {
            describe('having a non overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('uftu', 1).decrypt()).toBe('test');
                    expect(new Encryptor('lwkl', 18).decrypt()).toBe('test');
                    expect(new Encryptor('test', 26).decrypt()).toBe('test');
                });
            });
            describe('having an overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('uftu', 27).decrypt()).toBe('test');
                    expect(new Encryptor('lwkl', 44).decrypt()).toBe('test');
                    expect(new Encryptor('test', 52).decrypt()).toBe('test');
                });
            });
        });

        describe('when given an uppercase string', () => {
            describe('having a non overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('UFTU', 1).decrypt()).toBe('TEST');
                    expect(new Encryptor('LWKL', 18).decrypt()).toBe('TEST');
                    expect(new Encryptor('TEST', 26).decrypt()).toBe('TEST');
                });
            });
            describe('having an overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('UFTU', 27).decrypt()).toBe('TEST');
                    expect(new Encryptor('LWKL', 44).decrypt()).toBe('TEST');
                    expect(new Encryptor('TEST', 52).decrypt()).toBe('TEST');
                });
            });
        });


        describe('when given a mixed string', () => {
            describe('having a non overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('uFtU', 1).decrypt()).toBe('tEsT');
                    expect(new Encryptor('lWkL', 18).decrypt()).toBe('tEsT');
                    expect(new Encryptor('tEsT', 26).decrypt()).toBe('tEsT');
                });
            });
            describe('having an overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('uFtU', 27).decrypt()).toBe('tEsT');
                    expect(new Encryptor('lWkL', 44).decrypt()).toBe('tEsT');
                    expect(new Encryptor('tEsT', 52).decrypt()).toBe('tEsT');
                });
            });
        });

        describe('when given a string with special characters', () => {
            describe('having a non overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('uftu!*-', 1).decrypt()).toBe('test!*-');
                    expect(new Encryptor('lwkl!*-', 18).decrypt()).toBe('test!*-');
                    expect(new Encryptor('test!*-', 26).decrypt()).toBe('test!*-');
                });
            });
            describe('having an overflowing gap', () => {
                it('encrypts the string', () => {
                    expect(new Encryptor('uftu!*-', 27).decrypt()).toBe('test!*-');
                    expect(new Encryptor('lwkl!*-', 44).decrypt()).toBe('test!*-');
                    expect(new Encryptor('test!*-', 52).decrypt()).toBe('test!*-');
                });
            });
        });

    });
});