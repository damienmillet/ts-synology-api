export interface ApiResponse<T = undefined> {
  success: false;
  data: T | null;
  error?: {
    code: number;
    errors: any;
  };
  code?: number;
  message?: string;
}

// ! a check to see what's the type who working
// {
//   success: false,
//   code: 400,
//   message: 'No such account or incorrect password.'
// }
