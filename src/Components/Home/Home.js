import React, { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeague] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php').then(res => res.json()).then(data => setLeague(data.leagues.slice(0, 30)));
    }, [])
    return (
        <div>
            <header className="App-header">Sports Mania</header>

            <div className="row row-cols-1 row-cols-md-3 g-4 p-5 bg-info">
                {leagues.map(league=>{
                    return <League league={league} key={league.idLeague}></League>
                })}
            </div>
        </div>
    );
};

export default Home;