import { Strategy } from "../strategy/strategy.interface";

class Context {
    private strategy: Strategy | undefined;

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }

    public calculateDataMetric(data: number[]): Promise<number> {
        if (!this.strategy) {
            throw new Error('Calculation strategy is not defined. Use "setStrategy" method');
        }

        return this.strategy.calculate(data);
    }
}

export default new Context();
