import PrimaryLayout from '../components/layouts/PrimaryLayout/PrimaryLayout';
import SidebarLayout from '../components/layouts/SidebarLayout/SidebarLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
