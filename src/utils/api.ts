import axios from 'axios';

class ApiService {
  API_URL = 'https://infinite-reef-54814.herokuapp.com';
  path: string;
  errMsg: string;

  constructor(path='',errMsg='') {
    this.path = path;
    this.errMsg = errMsg;
  }
  async reqToken(email: string, password: string) {
    if (this.hasToken()) {
      alert("You are already login");
      return;
    }
    try {
      const { data } = await axios({
        method: "POST",
        url: this.API_URL + this.path,
        headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Content-Type': 'application/json',
        },
        responseType: "json",
        data: {
          email,
          password,
        }
      });
      console.log(data);
      this.setLocalStorage(data.token, data.refresh_token);
      this.displayToken();
      return true;
    } catch (err) {
      console.log(err);
      alert(this.errMsg);
      return false;
    }
  }
  async getData(fromRefreshToken=false) {
    if (!this.hasToken()) {
      alert("Please login first");
      return;
    }

    const token = localStorage.getItem('token');
    try {
      const res = await axios({
        method: "GET",
        url: this.API_URL + this.path,
        headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        responseType: "json",
      });
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
      
      if (fromRefreshToken) {
        return undefined;
      } else {
        await this.refreshToken();
        return this.getData(true);
      }
    }
  }
  async getUserProfile(afterRefreshToken=false) {
    if (!this.hasToken()) {
      return undefined;
    }

    const token = localStorage.getItem('token');
    try {
      const res = await axios({
        method: "POST",
        url: this.API_URL + this.path,
        headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        responseType: "json",
        data: {
          token
        },
      });
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
      if (afterRefreshToken) {
        return undefined;
      } else {
        await this.refreshToken();
        return this.getUserProfile(true);
      }
    }
  }
  async refreshToken() {
    // always has token
    try {
      const { data } = await axios({
        method: "POST",
        url: this.API_URL + "/auth/refresh-token",
        headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Content-Type': 'application/json',
        },
        responseType: "json",
        data: {
          refresh_token: localStorage.getItem("refresh_token"),
        }
      });
      console.log(data);
      this.setLocalStorage(data.token, data.refresh_token);
      this.displayToken();
    } catch (err) {
      console.log(err);
    }
  }
  logout() {
		localStorage.removeItem("token");
		localStorage.removeItem("refresh_token");
		window.location.href = '/'; 
  }
  hasToken() {
    return !!(localStorage.getItem("token"));
  }
  setLocalStorage(token: string, refresh_token: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("refresh_token", refresh_token);
  }
  displayToken() {
    console.log("FROM LOCAL STORAGE");
    console.log(localStorage.getItem("token"));
    console.log(localStorage.getItem("refresh_token"));
  }
}

export default ApiService;