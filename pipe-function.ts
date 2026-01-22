const pipe = <T, R>(...fns: Array<(arg: any) => any>): (arg: T) => R =>
  (initialValue: T): R =>
    fns.reduce((acc, fn) => fn(acc), initialValue) as R;
