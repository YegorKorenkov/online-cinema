import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@/components/ui/form-elements/Button';
import Heading from '@/components/ui/heading/Heading';

import { useAuth } from '@/hooks/useAuth';

import Meta from '@/utils/meta/Meta';

import styles from './Auth.module.scss';
import { IAuthInput } from './auth.interface';
import { useAuthRedirect } from './useAuthRedirect';

const Auth: FC = () => {
	useAuthRedirect();

	const { isLoading } = useAuth();

	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	});

	const login = (data: any) => {};

	const register = (data: any) => {};

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data);
		else if (type === 'register') register(data);
		reset();
	};

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />
					{/* Fields*/}

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	);
};

export default Auth;
