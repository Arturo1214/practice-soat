export class User {
  public id: any;
  public login: string;
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(
    id?: any,
    login?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
  ) {
    this.id = id ? id : null;
    this.login = login ? login : null;
    this.firstName = firstName ? firstName : null;
    this.lastName = lastName ? lastName : null;
    this.email = email ? email : null;

  }
}
