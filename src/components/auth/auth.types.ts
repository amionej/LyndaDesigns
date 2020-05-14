export interface User {
  id: number;
  first_name: String;
  last_name: String;
  email: String;
  is_staff: Boolean;
  is_superuser: Boolean;
  last_login: Date;
}
