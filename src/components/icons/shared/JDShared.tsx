export const JDSharedPathJ =
  "M50 0 L50 75 A1 1 0 0 1 0 75 L16 75 A1 1 0 0 0 34 75 L34 16 Z";
export const JDSharedPathDTop =
  "M58 0 A50 50 0 0 1 100 42 L84 42 A34 34 0 0 0 58 16 Z";
export const JDSharedPathDBottom =
  "M100 58 A50 50 0 0 1 58 100 L58 84 A34 34 0 0 0 84 58 Z";

export const JDShared = (
  <>
    <path d={JDSharedPathJ} />
    <path d={JDSharedPathDTop} />
    <path d={JDSharedPathDBottom} />
  </>
);
