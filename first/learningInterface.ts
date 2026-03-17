import axios from "axios";

/**
 * Here we use Inteface for type safty for the api response
 * so that some one can't face typo while using the data from api response
 */

interface NameResponse {
  count: number;
  name: string;
  age: number;
}

const url: string = `https://api.agify.io/?name=ramu`;

axios.get(url).then((res) => {
  const responseData = res.data as NameResponse;

  const name = responseData.name,
    age = responseData.age,
    count = responseData.count;

  // console.log(responseData.Age); It show error after using interface :)

  console.log(`
    The name is ${name[0].toUpperCase() + name.slice(1)},
    in the age of ${age} years. You do ${count}push-up 
    `);
});
