import * as fs from 'fs-extra';
import { resolve } from 'path';
import {
    calculationContext,
    maxCalcStrategy,
    meanCalcStrategy,
    sumCalcStrategy
} from './calculation';

// Some client code
(async function() {
    const dataFilepath = resolve(__dirname, '../data/source.json');
    const maxCalcFilePath = resolve(__dirname, '../data/max.txt');
    const meanCalcFilePath = resolve(__dirname, '../data/mean.txt');
    const sumCalcFilePath = resolve(__dirname, '../data/sum.txt');

    const data = await fs.readJson(dataFilepath);

    calculationContext.setStrategy(maxCalcStrategy);
    const maxCalc = await calculationContext.calculateDataMetric(data);

    calculationContext.setStrategy(meanCalcStrategy);
    const meanCalc = await calculationContext.calculateDataMetric(data);

    calculationContext.setStrategy(sumCalcStrategy);
    const sumCalc = await calculationContext.calculateDataMetric(data);

    await fs.writeFile(maxCalcFilePath, maxCalc.toString());
    await fs.writeFile(meanCalcFilePath, meanCalc.toString());
    await fs.writeFile(sumCalcFilePath, sumCalc.toString());
})();
