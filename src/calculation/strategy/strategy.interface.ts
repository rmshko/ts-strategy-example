export interface Strategy {
    calculate(data: number[]): Promise<number>
}
