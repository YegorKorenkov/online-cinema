import { getContentType } from 'api/api.helpers';
import { axiosClassic } from 'api/interceptors';
import axios from 'axios';
import { API_URL, getAuthUrl } from 'config/api.config';
import Cookies from 'js-cookie';

import { IAuthResponse } from '@/store/slices/user/user.interface';

import { removeTokensStorage, saveToStorage } from './auth.helper';

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/register')}`,
			{ email, password }
		);
		if (response.data.accessToken) saveToStorage(response.data);
		return response;
	},

	async login(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/login')}`,
			{ email, password }
		);

		if (response.data.accessToken) saveToStorage(response.data);
		return response;
	},

	logout() {
		removeTokensStorage();
		localStorage.removeItem('user');
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken');
		const response = await axios.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/login/access-token')}`,
			{ refreshToken },
			{
				headers: getContentType(),
			}
		);

		if (response.data.accessToken) saveToStorage(response.data);
		return response;
	},
};
