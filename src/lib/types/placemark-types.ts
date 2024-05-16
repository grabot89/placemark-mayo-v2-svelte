export interface Session {
    name: string;
    _id: string;
    token: string;
  }
  
  export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    admin: Boolean;
    _id?: string;
  }

  export interface Category {
    title: string;
    img: string;
    placemarks: Placemark[]
    _id: string;
  }
  
  export interface Placemark {
    name: string;
    category: Category | string;
    description: string;
    image: string;
    latitude: number;
    longitude: number;
    temperature: number;
    _id: string;
  }

  export interface DataSet {
    labels: string[];
    datasets: [{ values: number[] }];
  }