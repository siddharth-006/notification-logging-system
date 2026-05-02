export type Stack = "frontend" | "backend";

export type Level = "debug" | "info" | "warn" | "error" | "fatal";

export type FrontendPackage =
  | "api"
  | "component"
  | "hook"
  | "page"
  | "state"
  | "style";

export type CommonPackage = "auth" | "config" | "middleware" | "utils";

export type Package = FrontendPackage | CommonPackage;