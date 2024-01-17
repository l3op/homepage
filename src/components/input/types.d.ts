type Autocomplete = 'name' | 'email';
type Type = 'text' | 'email';

export interface InputProps {
  id: string;
  type?: Type;
  value?: string;
  required?: boolean;
  placeholder?: string;
  onChange?: (event: Event) => void;
  autocomplete?: Autocomplete;
}
