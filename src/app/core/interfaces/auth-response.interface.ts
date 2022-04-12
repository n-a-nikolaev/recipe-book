export interface AuthResponse {
  authenticated: boolean;
  error?: {
    message: string;
  } | null;
}
