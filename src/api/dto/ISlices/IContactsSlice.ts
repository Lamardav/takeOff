export interface IGetContacts {
  pageSize: number;
  searchVal: string;
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

export interface IGetAllContacts {
  searchVal: string;
}
