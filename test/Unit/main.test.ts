import {sayHello} from '../../src/main';

test ('it should says hello word!', () => {
    const result: string = sayHello({name: "Meysam", family: "Valiolahi"});
    expect(result).toBe('Hello, Meysam Valiolahi');
});
