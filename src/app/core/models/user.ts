export interface UserListHttpRequest {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: any;
}


export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
