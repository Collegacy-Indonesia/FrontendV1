import axios from 'axios';

class ApiService {
	API_URL = 'https://infinite-reef-54814.herokuapp.com';
	path: string;
	errMsg: string;

	constructor(path = '', errMsg = '') {
		this.path = path;
		this.errMsg = errMsg;
	}

	async reqToken(email: string, password: string) {
		if (this.hasToken()) {
			return;
		}
		try {
			const { data } = await axios({
				method: 'POST',
				url: this.API_URL + this.path,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				},
				responseType: 'json',
				data: {
					email,
					password
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

	async getData(fromRefreshToken = false) {
		const token = this.getToken();
		if (!token) {
			throw 'user has no token';
		}

		try {
			const res = await axios({
				method: 'GET',
				url: this.API_URL + this.path,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				},
				responseType: 'json'
			});
			console.log(res);
			return res.data;
		} catch (err) {
			console.log(err);

			if (fromRefreshToken) {
				throw 'your token is invalid';
			} else {
        try {
          await this.refreshToken();
          return this.getData(true);
        } catch (err) {
          throw err;
        }
			}
		}
	}

	async postData(payload, fromRefreshToken: boolean = false) {
		const token = this.getToken();
		if (!token) {
			throw 'user has no token';
		}

		try {
			const res = await axios({
				method: 'POST',
				url: this.API_URL + this.path,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				},
				data: payload,
				responseType: 'json'
			});
			console.log(res);
			return res.data;
		} catch (err) {
			console.log(err);

			if (fromRefreshToken) {
        throw 'your token is invalid';
			} else {
        try {
          await this.refreshToken();
          return this.postData(payload, true);
        } catch (err) {
          throw err;
        }
			}
		}
	}

	async putData(id, payload, fromRefreshToken: boolean = false) {
		const token = this.getToken();
		if (!token) {
			throw 'user has no token';
		}

		try {
			const res = await axios({
				method: 'PUT',
				url: this.API_URL + this.path + '/' + id,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				},
				responseType: 'json',
				data: payload
			});
			console.log(res);
			return res.data;
		} catch (err) {
			console.log(err);

			if (fromRefreshToken) {
				// return undefined;
        throw 'your token is invalid';
			} else {
        try {
          await this.refreshToken();
          return this.putData(id, payload, true);
        } catch (err) {
          throw err;
        }
			}
		}
	}

	async deleteData(id, fromRefreshToken: boolean = false) {
		const token = this.getToken();
		if (!token) {
			throw 'user has no token';
		}

		try {
			const res = await axios({
				method: 'DELETE',
				url: this.API_URL + this.path + '/' + id,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				},
				responseType: 'json'
			});
			console.log(res);
			return res.data;
		} catch (err) {
			console.log(err);

			if (fromRefreshToken) {
				throw 'your token is invalid';
			} else {
        try {
          await this.refreshToken();
          return this.deleteData(id, true);
        } catch (err) {
          throw err;
        }
			}
		}
	}

	async refreshToken() {
		// always has token
		try {
			const { data } = await axios({
				method: 'POST',
				url: this.API_URL + '/auth/refresh-token',
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				},
				responseType: 'json',
				data: {
					refresh_token: localStorage.getItem('refresh_token')
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
		localStorage.removeItem('token');
		localStorage.removeItem('refresh_token');
		window.location.href = '/';
	}
	getToken() {
		return localStorage.getItem('token');
	}
	hasToken() {
		return !!localStorage.getItem('token');
	}
	setLocalStorage(token: string, refresh_token: string) {
		localStorage.setItem('token', token);
		localStorage.setItem('refresh_token', refresh_token);
	}
	displayToken() {
		console.log('FROM LOCAL STORAGE');
		console.log(localStorage.getItem('token'));
		console.log(localStorage.getItem('refresh_token'));
	}
}

export default ApiService;
