import { MedicinebyNamedPipe } from './medicineby-named.pipe';

describe('MedicinebyNamedPipe', () => {
  it('create an instance', () => {
    const pipe = new MedicinebyNamedPipe();
    expect(pipe).toBeTruthy();
  });
});
