import { getGenreUrl } from 'config/url.config';
import { useQuery } from 'react-query';

import { GenreService } from '@/services/genre.service';

import { IMenuItem } from '../Menu.interface';

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								title: genre.name,
							} as IMenuItem)
					)
					.slice(0, 4),
		}
	);
	return queryData;
};
