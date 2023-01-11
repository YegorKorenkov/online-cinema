import { getAdminHomeUrl } from 'config/url.config';
import React, { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';

import MenuItem from '../MenuItem';

import LogoutButton from './LogoutButton';

const AuthItems: FC = () => {
	const { user } = useAuth();
	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{ icon: 'MdSettings', title: 'Profile', link: '/profile' }}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', title: 'Login', link: '/auth' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	);
};

export default AuthItems;
