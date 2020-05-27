import axios from "axios";

export default axios.create({
//change the baseURL that depends on REST APIs url that your Server configures.
  baseURL: "http://localhost:8080/api",
 //baseURL: "mongodb+srv://sward:Skeleton1@cluster0-hzuyp.mongodb.net/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});