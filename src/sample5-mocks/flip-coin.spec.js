const clipCoin = () => Math.random() > 0.5 ? 'tails' : 'heads';


test('test flip coin with mock', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.7)
    const res = clipCoin()
    expect(res).toBe('tails');
    jest.spyOn(global.Math, 'random').mockRestore()
})




