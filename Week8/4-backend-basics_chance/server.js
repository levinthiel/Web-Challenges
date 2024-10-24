import { createServer } from "node:http";
import Chance from "chance";  // Correct ESM import

const chance = new Chance();  // Create instance of Chance

export const server = createServer((request, response) => {
    const randomName = chance.name();
    const age = chance.age();  
    const job = chance.profession()  
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end(`Hello, ${randomName} you are ${age} and works as a ${job}!`);  // Send random name in the response
});
