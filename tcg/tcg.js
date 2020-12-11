class NinjaCard {
    constructor(cost, power, resilience) {
        this.cost = cost;
        this.pwr = power;
        this.res = resilience;

        this.displayStats();
    }

    adjustHealth(res) {
        this.res += res;
    }

    adjustPower(pwr) {
        this.pwr += pwr;
    }

    displayStats() {
        console.log('Cost: ' + this.cost + ' ower: ' + this.pwr + ' Resilience: ' + this.res)
    }
}

class RedBelt extends NinjaCard {
    constructor() {
        super(3, 3, 4);
    }
}

class BlackBelt extends NinjaCard {
    constructor() {
        super(4, 5, 4);
    }
}

class EffectCard {
    constructor(name, cost, text, stat, magnitude) {
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.mag = magnitude;
    }

    play(target) {
        if (this.stat == 'res')
            target.adjustHealth(this.mag);

        if (this.stat == 'pwr')
            target.adjustPower(this.mag);

        console.log(this.text);
        target.displayStats();
    }

}

class HardAlgorithm extends EffectCard {
    constructor() {
        super('Hard Algorithm', 2, 'Increase target\'s resilience by 3', 'res', 3);
    }
}

class PromiseRejection extends EffectCard {
    constructor() {
        super('Unhandled Promise Rejection', 1, 'Reduce target\'s resilience by 2', 'res', -2);
    }
}

class PairProgramming extends EffectCard {
    constructor() {
        super('Pair Programming', 3, 'Increase target\'s power by 2', 'pwr', 3);
    }
}

const reddie = new RedBelt();

const hardie = new HardAlgorithm();
hardie.play(reddie);

const blackie = new BlackBelt();

const promise = new PromiseRejection();
promise.play(reddie);

const pair = new PairProgramming();
pair.play(blackie);

