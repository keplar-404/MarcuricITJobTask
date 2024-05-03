export interface HeaderofList {
  Header: string;
  accessor: string;
  sort: boolean;
}

export interface Records {
  id: number;
  year: number;
  Barcode: number;
  Client_Code: number;
  Client_Name: string;
  Subtotal: string;
  Discount: string;
  Total: string;
  Paid: string;
  Due: string;
  Date: string;
  Status: any;
  Action: any;
}

export interface Tests {
  id: number;
  checkbox: any;
  Test_Name: string;
  Price: string;
}

export interface Report {
  id: number;
  year: number;
  Barcode: number;
  Client_Code: number;
  Client_Name: string;
  Gender: string;
  Age: string;
  Phone: string;
  Tests: string;
  Date: string;
  Done: any;
  Signed: any;
  Action: any;
}

export interface Branche {
  id: number;
  Name: string;
  Phone: string;
  Address: string;
  Edit: any;
  Delete: any;
}
export interface Test {
  id: number;
  Name: string;
  Shortcut?: string;
  Sample_Type?: string;
  Price?: string;
  Precautions?: string;
  Edit: any;
  Delete: any;
}
export interface Culture {
  id: number;
  Name?: string;
  Option?: string;
  Shortcut?: string;
  Sample_Type?: string;
  Price?: string;
  Precautions?: string;
  Edit: any;
  Delete: any;
}

export interface Doctor {
  id: number;
  Code: string;
  Name: string;
  Phone: string;
  Email: string;
  Address: string;
  Commission: string;
  Total: number;
  Paid: string;
  Due: string;
  Edit: any;
  Delete: any;
}

export interface PriceList {
  Test: any;
  Price: any;
  Currency: string;
}
