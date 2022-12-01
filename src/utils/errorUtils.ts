type ErrorTypes =
  | "bad_request"
  | "not_found"
  | "unauthorized"
  | "wrong_schema"
  | "conflict";

export interface AppError {
  type: ErrorTypes;
  message?: string;
}

export function isAppError(error: object): error is AppError {
  return (error as AppError).type !== undefined;
}
export function errorTypeStatusCode(type: ErrorTypes) {
  if (type === "bad_request") return 400;
  if (type === "unauthorized") return 401;
  if (type === "not_found") return 404;
  if (type === "conflict") return 409;
  if (type === "wrong_schema") return 422;
  return 400;
}

export function badRequestError(message?: string): AppError {
  return { type: "bad_request", message };
}
export function unauthorizedError(message?: string): AppError {
  return { type: "unauthorized", message };
}
export function notFoundError(message?: string): AppError {
  return { type: "not_found", message };
}
export function conflictError(message?: string): AppError {
  return { type: "conflict", message };
}
export function wrongSchemaError(message?: string): AppError {
  return { type: "wrong_schema", message };
}
