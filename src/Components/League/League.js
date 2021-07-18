import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './League.css';

const League = ({league}) => {
    const [leagueDetail,setLeaguesDetail]=useState([]);
    const {idLeague, strLeague, strSport}=league;
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`).then(res=>res.json()).then(data=>setLeaguesDetail(data.leagues[0]));
    },[idLeague])
    const {strLogo}=leagueDetail;
    const history=useHistory();
    const showDetail = props=> history.push(`/league/about/${props}`);

    return (
        <div className="col bg-danger text-white border border-info league">
            <h4>{strLeague}</h4>
            <p> Sports type: {strSport}</p>
            <button className='btn btn-primary' onClick={()=>showDetail(idLeague)}>Explore</button><br />
            <img src={strLogo} alt="Not found" />
        </div>
    );
};

export default League;