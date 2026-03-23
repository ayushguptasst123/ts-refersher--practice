/*
-> Explain the difference between type and interface.
-> Create an Address structure using multiple approaches (type, interface, class).
-> Show examples with:
Optional fields
Nested objects
Arrays
Union or intersection types
*/

/*
Interface: It is used when we work with a class, and it forces us to implement all the variables declared inside the interface at the time of creating that class.
Type: If we use a type in a class, it doesn’t force us to declare all the variables in the class at the time of creation, but it shows an error if we assign the type to an instance of that class and don’t handle it correctly.
`const obj:VaraiableOfType = new Class();`

*/
type latlong1 = {
  lat: number;
  lon: number;
};
type addressType1 = {
  memberName: string[];
  wardNo: number;
  lane: string;
  lane2?: string;
  pincode: number;
  city: string;
  country: "USA" | "INDIA" | "CHINA";
  coordinates: latlong3;
  isMetroCity: boolean;
};

const coordinates1: latlong1 = {
  lat: 0,
  lon: 0,
};

const address1: addressType1 = {
  memberName: ["Ramesh", "arav", "mahesh"],
  wardNo: 12,
  lane: "Ram dhan ghos lane",
  pincode: 700003,
  city: "kolkata",
  country: "CHINA",
  coordinates: coordinates1,
  isMetroCity: true,
};

console.log(address1);

// By using CLASS
type latlong3 = {
  lat: number;
  lon: number;
};
class Address3 {
  memberName: string[];
  wardNo: number;
  lane: string;
  lane2?: string;
  pincode: number;
  city: string;
  country: "USA" | "INDIA" | "CHINA";
  coordinates: latlong3;
  isMetroCity: boolean;

  constructor(
    memberName: string[],
    wardNo: number,
    lane: string,
    pincode: number,
    city: string,
    country: "USA" | "INDIA" | "CHINA",
    coordinates: latlong3,
    isMetroCity: boolean,
  ) {
    this.memberName = memberName;
    this.wardNo = wardNo;
    this.lane = lane;
    this.pincode = pincode;
    this.city = city;
    this.country = country;
    this.coordinates = coordinates;
    this.isMetroCity = isMetroCity;
  }
}
const corrdinates: latlong3 = {
  lat: 235.23,
  lon: 985.32,
};
const address3 = new Address3(
  ["neha", "priyanka", "rajiv", "shiva"],
  12,
  "Gokul Road",
  12345,
  "Ahemdabad",
  "USA",
  corrdinates,
  true,
);
address3.lane2 = "Memnagar";

console.log(address3);
