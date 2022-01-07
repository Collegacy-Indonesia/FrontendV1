import axios from 'axios';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1hbGlrYWtiYXIyNjJAZ21haWwuY29tIiwiaWQiOjE5LCJleHAiOjE2NDAyNjc4NTN9.I9bGTuiNXexNByYlAa8WIjD4yUfFtHrSGR8Fs_O1vZ4";

const func = async () => {
  try {
    const res = await axios({
      method: "POST",
      url: 'https://infinite-reef-54814.herokuapp.com/auth/profile',
      headers: { 
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      responseType: "json",
      data: {
        token,
      }
      // token
      // body: {
      //   token
      // }
    });
    // console.log(res);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

func();
