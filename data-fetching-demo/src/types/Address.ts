import { Geo } from "./Geo";

export type Adddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};
