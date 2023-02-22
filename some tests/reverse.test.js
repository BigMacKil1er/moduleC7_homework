const reverse = require('./reverse')

describe("reverse test", () => {
    it('The string "Hello" has the result "olleH"', () => {
        const result = reverse('Hello');
        expect(result).toBe('olleH');    
    });
    it('The string "May I have your attention please?" has the result "?esaelp noitnetta ruoy evah I yaM"', () => {
        const result = reverse('May I have your attention please?');
        expect(result).toBe('?esaelp noitnetta ruoy evah I yaM');
    })
});