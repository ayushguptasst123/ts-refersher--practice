import axios from "axios";

const url: string = `https://jsonplaceholder.typicode.com/comments/5`;

interface ApiResponse {
  postId: number;
  body: string;
  email: string;
}

axios.get(url).then((res) => {
  const data = res.data as ApiResponse;

  console.log(data);
  console.log();
  console.log("Data: ", data.body);
  console.log("Email: ", data.email);
});
