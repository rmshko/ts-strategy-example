## Strategy design pattern implementation written in TypeScript

## Here's a simple use case
We have some data (array of numbers) that we want to process and get some result, but we need to process it differently 
depending on the case (calculate mean, maximum or sum). 
We can use **Strategy** pattern to select needed processing algorithm at runtime from the client side (_src/index.ts_ stands for the client).
