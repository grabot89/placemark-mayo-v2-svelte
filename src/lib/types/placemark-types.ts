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
    admin: boolean;
    _id?: string;
  }

  export interface Category {
    name: string;
    //img: string;
    //placemarks: Placemark[]
    _id?: string;
  }
  
  export interface Placemark {
    name: string;
    category: Category | string;
    description: string;
    image: string;
    latitude: number;
    longitude: number;
    user: User | string;
    temperature: number;
    images: string[];
    _id?: string;
  }

  export interface DataSet {
    labels: string[];
    datasets: [{ values: number[] }];
  }