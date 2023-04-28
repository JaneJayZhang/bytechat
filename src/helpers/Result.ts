export class Result<V = any> {
  public success: boolean;
  private data: V;
  private msg?: string;

  private constructor(success: boolean, data: V, msg?: string) {
    this.success = success;
    this.data = data;
    this.msg = msg;
  }

  public static ok<V>(value: V, msg?: string): Result<V> {
    return new Result(true, value, msg);
  }

  public static fail(msg: string): Result {
    return new Result(false, undefined, msg);
  }

  public getValue(): V {
    return this.data;
  }

  public getError(): { code: number; message: string } {
    return { code: 500, message: this.msg ?? 'Error' };
  }
}
