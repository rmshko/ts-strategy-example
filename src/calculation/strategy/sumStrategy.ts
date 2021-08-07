import { Strategy } from './strategy.interface';

class SumStrategy implements Strategy {
    public async calculate(data: number[]): Promise<number> {
        return data.reduce((a, b) => a + b, 0);
    }
}

export default new SumStrategy();
