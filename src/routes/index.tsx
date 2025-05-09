import { Navigate, Route, Routes } from 'react-router';

import { Alert } from '~/components/alert';
import Categories from '~/components/categories';
import { Loader } from '~/components/loader';
import Main from '~/components/Main';
import { NotFoundPage } from '~/components/notFoundPage';
import Recipe from '~/components/recipe';
import { useGetFilteredCategories } from '~/Hooks/useGetFilteredCategories';

const AppRoutes = () => {
    const { data, isLoading, isError } = useGetFilteredCategories();
    if (isError) return <Alert />;
    if (isLoading) return <Loader />;

    const subcategories = data.reduce<Record<string, { id: string; category: string }[]>>(
        (acc, { category, subCategories }) => {
            acc[category] = subCategories.map(({ _id: id, category: sub }) => ({
                id,
                category: sub,
            }));
            return acc;
        },
        {},
    );

    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='the-juiciest'>
                <Route index element={<Categories />} />
                <Route path=':id' element={<Recipe />} />
            </Route>
            <Route path=':id' element={<Recipe />} />
            {data.map(({ category }) => {
                const subs = subcategories[category]!;
                const firstSub = subs[0]!;

                return (
                    <Route key={category} path={category}>
                        <Route index element={<Navigate to={`${firstSub.category}`} />} />
                        {subs.map((sub) => (
                            <Route key={sub.id} path={sub.category}>
                                <Route
                                    index
                                    element={
                                        <Categories category={category} subcategory={sub.id} />
                                    }
                                />

                                <Route path=':id' element={<Recipe />} />
                            </Route>
                        ))}
                    </Route>
                );
            })}
            <Route path='/not-found' element={<NotFoundPage />} />
            <Route path='*' element={<Navigate to='/not-found' replace />} />
        </Routes>
    );
};
export default AppRoutes;
