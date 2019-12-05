import sum from '../src/sum';

describe('src/sum.js', () => {
    it('测试方法', () => {
        expect(sum(1, 1)).toBe(2)
    })
})