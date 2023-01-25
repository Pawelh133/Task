interface ICountryName {
  common: string;
}

interface ICountryIdd {
  root: string;
}

export interface IResponseData {
  cca2: string;
  name: ICountryName;
  idd: ICountryIdd;
}
