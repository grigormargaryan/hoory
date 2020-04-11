export const required = (value) => (value ? undefined : 'Value is required');

export const minLength = (value) =>
  value.length < 6 ? 'Value must be at least 6 characters' : undefined;
export const maxLength = (value) => (value.length > 10 ? 'Value is too long' : undefined);
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
