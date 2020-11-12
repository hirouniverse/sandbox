export class Employee {
  static id: number = 0
  private accountId: number
  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string
  ) {
    Employee.id++;
    this.accountId = Employee.id
  }

  public static getId(): number {
    return Employee.id
  }

  public getAccountId(): number {
    return this.accountId
  }

  public getName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  public getProfile(): string {
    return `${this.jobTitle}: ${this.firstName} ${this.lastName}`
  }
}
