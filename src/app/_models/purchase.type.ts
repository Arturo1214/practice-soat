export class PurchaseType {
  public id: any;
  public value: string;

  constructor(id?: any,
              value?: string) {
    this.id = id ? id : null;
    this.value = value ? value : null;
  }
}
