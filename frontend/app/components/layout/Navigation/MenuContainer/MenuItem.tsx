import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import MaterialIcon from '../../../ui/MaterialIcon';

import { IMenuItem } from './Menu.interface';
import styles from './Menu.module.scss';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter();

	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<a>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	);
};

export default MenuItem;
