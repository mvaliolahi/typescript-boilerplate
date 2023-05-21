import * as dotenv from 'dotenv'
dotenv.config()

interface Person {
    name: string;
    family: string;
}

export function sayHello(person: Person): string {
    return `Hello, ${person.name} ${person.family}`;
}
