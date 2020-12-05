import { MomentPipe } from './moment.pipe';
import * as moment from 'moment';
describe('MomentPipe', () => {
  it('create an instance', () => {
    const pipe = new MomentPipe();
    expect(pipe).toBeTruthy();
  });
});
