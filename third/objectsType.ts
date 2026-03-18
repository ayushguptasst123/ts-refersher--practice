const profile = {
  firstName: "John",
  age: 32,
  isActive: true,
  address: {
    city: "New York",
    country: "USA",
  },
  createdAt: new Date(),
};

const {
  address: { city, country },
}: {
  address: { city: string; country: string };
} = profile;

console.log(city, country);


const { age }: { age: number } = profile;
console.log(age);
