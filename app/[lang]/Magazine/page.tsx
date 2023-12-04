import Banner from '@/components/common/Banner';
import SearchInput from '@/components/magazine/SearchInput';
import CategoriesContainer from '@/components/magazine/CategoriesContainer';
import TagsContainer from '@/components/magazine/TagsContainer';
import Landa from '@/components/icons/magazine/Landa';
import MagazineCardsContainer from '@/components/magazine/MagazineCardsContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Holding | Magazine',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default async function MagazinePage({
  params: { lang },
}: {
  params: { lang: string };
}) {

  return (
    <div className="relative">
      <Banner image="/static/images/Magazine/hero.png" title="Magazine" lang={lang} />
      <div className="mx-28 my-32 grid grid-cols-3 gap-20">
        <MagazineCardsContainer />
        <div className="col-span-1 flex flex-col gap-12">
          <SearchInput />
          <CategoriesContainer />
          <TagsContainer />
        </div>
      </div>
      <Landa />
    </div>
  );
}
