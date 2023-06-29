import { TimeAgo } from './time-ago.pipe';

describe('TimeAgo', () => {
  it('create an instance', () => {
    const pipe = new TimeAgo();
    expect(pipe).toBeTruthy();
  });
});
