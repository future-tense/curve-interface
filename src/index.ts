
export interface Curve {
    basepoint: Point;
    pointFromBuffer(buf: Buffer): Point;
    scalarFromBuffer(buf: Buffer): Scalar;
    scalarFromHash(...args: Buffer[]): Scalar;
    randomScalar(): Scalar;
}

export interface Point {
    add(p: Point): Point;
    sub(p: Point): Point;
    mul(p: Scalar): Point;
    copy(): Point;
    toBuffer(): Buffer;
    equals(p: Point): boolean;
}

export interface Scalar {
    add(s: Scalar): Scalar;
    sub(s: Scalar): Scalar;
    mul(s: Scalar): Scalar;
    inverse(): Scalar;
    copy(): Scalar;
    toBuffer(): Buffer;
    equals(s: Scalar): boolean;
}
