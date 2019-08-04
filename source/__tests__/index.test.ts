import { expect } from 'chai';
import sinon from 'sinon';

import Example from '..';

describe('Example', () => {
  it('should console log on init', () => {
    const logSpy = sinon.spy(console, 'log');

    const example = new Example();

    expect(example).to.be.an.instanceof(Example);
    expect(logSpy.calledOnceWith('typescript-boilerplate init')).to.be.true;
  });
});
