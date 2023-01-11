import { NextPageAuth } from '@/shared/types/auth.types';

const UsersListPage: NextPageAuth = () => {
	return <div>UsersPage</div>;
};

UsersListPage.isOnlyAdmin = true;

export default UsersListPage;
