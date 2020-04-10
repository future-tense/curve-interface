
export interface ICurve<S, P> {
    basepoint: P;
    pointFromBuffer(buf: Buffer): P;
    scalarFromBuffer(buf: Buffer): S;
    scalarFromHash(...args: Buffer[]): S;
    randomScalar(): S;
}

export interface IScalar {
    s: any;
    add(s: IScalar): IScalar;
    sub(s: IScalar): IScalar;
    mul(s: IScalar): IScalar;
    inverse(): IScalar;
    copy(): IScalar;
    toBuffer(): Buffer;
    equals(s: IScalar): boolean;
}

export interface IPoint {
    p: any;
    add(p: IPoint): IPoint;
    sub(p: IPoint): IPoint;
    mul(p: IScalar): IPoint;
    copy(): IPoint;
    toBuffer(): Buffer;
    equals(p: IPoint): boolean;
}
