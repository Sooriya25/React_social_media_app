import { useContext } from 'react';
import Feed from './Feed';
import DataContext from './context/DataContext';
import Spinner from './Spinner';

 const Home = () => {
  const {searchResults, loading} = useContext(DataContext);

  if(loading) return <Spinner fullScreen={true} />

  return (
    <main className='Home'>
       {searchResults.length ? (
        <Feed posts={searchResults} />
       ) : (
        <p style={{marginTop: "2rem"}}> No Posts to display </p>
       )}
    </main>
  )
}
export default Home