import axios from "axios";

export function getNews(){
  return new Promise((resolve, reject) => {
    axios.get("https://5fe0a5f904f0780017de9254.mockapi.io/api/cnews/news")
    .then((data) => {
      resolve(data);
    })
    .catch((err) => reject(err));
  })
}
