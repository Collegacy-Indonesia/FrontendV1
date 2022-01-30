import { writable } from 'svelte/store';
import ApiService from '../utils/api';

const userContext = writable(null);

const login = async (email: string, password: string) => {
	const errMsg = 'Your email and password is invalid';
	const apiSrv = new ApiService('/auth/login', errMsg);
	return await apiSrv.reqToken(email, password);
};

const register = async (email: string, password: string) => {
	const errMsg = 'Your email has been used. Please login';
	const apiSrv = new ApiService('/auth/register', errMsg);
	return await apiSrv.reqToken(email, password);
};

const getListUsers = async (email: string) => {
	const apiSrv = new ApiService('/users');
  try {
    const dataUsers = await apiSrv.getData();
    const user = dataUsers.find((datum) => datum.email === email);
    userContext.set(user);
    console.log(user);
    userContext.subscribe((value) => console.log(value));
  } catch (e) {
    alert(e)
  }
};

const getUserProfile = async () => {
	const apiSrv = new ApiService('/auth/profile');
	const token = apiSrv.getToken();
  try {
    const userProfile = await apiSrv.postData({ token });
    userContext.set(userProfile);
    console.log(userProfile);
    userContext.subscribe((value) => console.log(value));
  } catch (e) {
    alert(e)
  }
};

const logout = () => {
	const apiSrv = new ApiService();
	apiSrv.logout();
	userContext.set(null);
};

export { userContext, login, register, logout, getListUsers, getUserProfile };
