export const responeSuccess = (
  metaData: any = null,
  message: string = "ok",
  code: number = 200
) => {
  if (typeof code !== `number`) code = 200;
  return {
    status: "success",
    code,
    message,
    metaData,
  };
};

export const responeError = (
  message: string = `Internal Server Error`,
  code: number = 500,
  stack: null = null
) => {
  if (typeof code !== `number`) code = 200;
  return {
    status: `Error`,
    code,
    message,
    stack,
  };
};
