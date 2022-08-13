import { getGenreUrl, getMovieUrl } from 'config/url.config';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import MaterialIcon from '@/components/ui/MaterialIcon';

import { IMovie } from '@/shared/types/movie.types';

import { getGenresListEach } from '@/utils/movie/getGenresListEach';

import styles from './MovieList.module.scss';

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						alt={movie.title}
						draggable={false}
						width={65}
						height={97}
						src={movie.poster}
						priority
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div className={styles.title}>{movie.title}</div>
				<div className={styles.genre}>
					{movie.genres.map((genre, id) => (
						<Link key={genre._id} href={getGenreUrl(genre.slug)}>
							<a>{getGenresListEach(id, movie.genres.length, genre.name)}</a>
						</Link>
					))}
				</div>

				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	);
};
export default MovieItem;
