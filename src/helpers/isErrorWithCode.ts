type ErrorWithCode = {
  code: string;
};

const isErrorWithCode = (error: any): error is ErrorWithCode => {
  return 'code' in error;
};

export { isErrorWithCode };
