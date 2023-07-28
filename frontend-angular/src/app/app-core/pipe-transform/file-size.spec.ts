import { FileSizePipe } from './file-size.pipe';

describe('FileSize', () => {
  let pipe: FileSizePipe;

  const kb = 2048;
  const kbDec = 512;

  beforeEach(() => {
    pipe = new FileSizePipe();
  });

  it('transform => convertir exitosamente de KB a MB un tamaño de archivo.', () => {
    const mb = pipe.transform(kb);
    expect(mb).toEqual('2.00MB');
  });

  it('transform => convertir exitosamente de KB a MB un tamaño de archivo menor a un mega.', () => {
    const mb = pipe.transform(kbDec);
    expect(mb).toEqual('0.50MB');
  });
});
