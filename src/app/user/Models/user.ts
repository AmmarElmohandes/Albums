export class User {
  constructor(
    public name: '',
    public email: '',
    public phone: number,
    public address: { city: ''; suite: ''; street: '' }
  ) {}
}
