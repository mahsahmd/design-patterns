import { count, singletonCounter } from "./singletons"

test('increamentig  1 time should be one', () => {
    singletonCounter.increament();
    expect(count).toBe(1);
})

test('increamentig 3 more times should be 4', () => {
    singletonCounter.increament();
    singletonCounter.increament();
    singletonCounter.increament();
    expect(count).toBe(4);
})
test('deccreamentig 1 time should be 3', () => {
    singletonCounter.decreament();
    expect(count).toBe(3);
})