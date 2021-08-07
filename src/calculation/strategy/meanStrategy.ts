import { Strategy } from './strategy.interface';

class MeanStrategy implements Strategy {
    public async calculate(data: number[]): Promise<number> {
        return data.reduce((a, b) => a + b, 0) / data.length;
    }
}

export default new MeanStrategy();
