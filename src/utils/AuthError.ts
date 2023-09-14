export class AuthError extends Error {
  public name: "AuthError";

  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}
