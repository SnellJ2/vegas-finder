import Header from '../components/Header';

function Home({ isLoggedIn, user}) {
    return (
        <Header isLoggedIn={isLoggedIn} user={user} />
    );
}

export default Home;