import { Strategy } from './strategy.interface';

class MaxStrategy implements Strategy {
    public async calculate(data: number[]): Promise<number> {
        return Math.max(...data);
    }
}

export default new MaxStrategy();
