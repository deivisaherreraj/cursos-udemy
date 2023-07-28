import { OperationExpression } from '../core/objects/filter.object';
import { EnumArrayPipe } from './enum-array.pipe';

describe('Pipe: EnumArraye', () => {
  let pipe: EnumArrayPipe;

  beforeEach(() => {
    pipe = new EnumArrayPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform => retornar array de la enumeracion', () => {
    const mb = pipe.transform(OperationExpression);
    expect(mb.length > 0).toEqual(true);
  });
});
