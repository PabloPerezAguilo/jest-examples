module.exports = class Cont {
    constructor() {
        this.cont = 0;
    }

    inc() {
        return ++this.cont;
    }

    reset() {
        return this.cont = 0;
    }
}
