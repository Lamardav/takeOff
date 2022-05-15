export interface IGetContacts {
  pageSize: number;
}

export interface IDeleteContact {
  id: number;
}

export interface IUpdateContact {
  id: number;
  name: string;
  username: string;
  phone: string;
}
