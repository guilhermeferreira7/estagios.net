export class User {
  name!: string;
  email!: string;
  password!: string;
  isEnterprise?: boolean;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}