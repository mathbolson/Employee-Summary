  
'use strict';

const Manager = require('../lib/Manager');

test('Checking for office number via constructor argument', () => {
    const value = 111;
    const manager = new Manager('Lloyd', 789, 'test@only.com', value);
    expect(manager.officeNumber).toBe(value);
});

test('Checking for office number via getOfficeNumber()', () => {
    const value = 111;
    const manager = new Manager('Foo', 789, 'test@test.com', value);
    expect(manager.getOfficeNumber()).toBe(value);
});