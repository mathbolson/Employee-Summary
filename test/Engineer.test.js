
const Engineer = require('../lib/Engineer');

test('Checking for GitHUb account via constructor', () => {
    const value = 'mygithub';
    const engineer = new Engineer('Lloyd', 789, 'test@only.com', value);
    expect(engineer.github).toBe(value);
});


test('Can get GitHub username via getGithub()', () => {
    const value = 'mygithub';
    const engineer = new Engineer('Lloyd', 789, 'test@test.com', value);
    expect(engineer.getGithub()).toBe(value);
});