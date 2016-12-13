import test from 'ava';
import demo from '../src/demo';

test('has 50', t => {
  t.is(demo(10), 50, 'has 50 as result');
});