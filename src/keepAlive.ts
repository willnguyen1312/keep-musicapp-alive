import axios from 'axios';

const IS_PRO = process.env.NODE_ENV === 'production';

const url = IS_PRO
  ? 'https://personal-music-app-api.herokuapp.com/api/hello'
  : 'http://localhost:3333/api/hello';

setInterval(() => {
  axios.get(url).then((res) => console.log(res.data));
}, 300000);
