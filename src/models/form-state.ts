export enum FormState {
  Clean,
  Success,
  Error,
  Submitted
}

export class RecaptchaFormState {
  public Token: string;

  public static Unverified = new RecaptchaFormState(""); 
  public static Verified = (token: string) => new RecaptchaFormState(token); 

  private constructor(token: string) {
    this.Token = token;
  }
}
