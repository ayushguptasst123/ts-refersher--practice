/**
 * @param message :string
 * @returns return alone is fine | undefined return are allowed | It's good if we didn't return anything
 */

const logger = (message: string): void => {
  console.log(message);

  //Allowed return types are
  return;
  return undefined;
};

/**
 *
 * @param message :string
 * @returns type is never means this function never reach it's end it will break on half
 */

const throwApiError = (message: string): never => {
  throw new Error(message);
};
