import app from "../src/app";

describe('app', () => {
    it('returns app', () => {
        expect(app()).toBe('app');
    })
})