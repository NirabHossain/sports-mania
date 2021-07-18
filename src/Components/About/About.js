import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import maleImg from '../../Photo/male.png';
import femaleImg from '../../Photo/female.png';
import './About.css';

const About = () => {
    const style = { backgroundImage: `url('https://i.ebayimg.com/images/g/hkIAAOSwhcJWPLg4/s-l300.jpg')`, opacity: .5 }
    const { id } = useParams();
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`).then(res => res.json()).then(data => setAbout(data.leagues[0]));
    }, [id])
    console.log(about);
    const { dateFirstEvent, strCountry, strSport, strLogo, strLeague, strGender, strDescriptionEN } = about;

    return (
        <div>
            <header className="App-header" style={style}>
                <img src={strLogo} alt="" />
            </header>

            <div className='p-5 bg-primary'>
                <div className="row row-cols-1 row-cols-md-2 g-4 p-5 bg-info aboutInfo">
                    <div className='col info text-white'>
                        <h1>{strLeague}</h1>
                        <h3>Founded: {dateFirstEvent}</h3>
                        <h3>Country: {strCountry}</h3>
                        <h3>Sport type: {strSport}</h3>
                        <h3>Gender: {strGender}</h3>
                    </div>
                    <div className='col aboutImg'>
                        {
                            strGender === 'Male' ? <img src={maleImg} alt="Male" />:<img src={femaleImg} alt="Female" />
                        }
                    </div>
                </div>

                <div className='text-white p-5'>
                    <h3>{strDescriptionEN}</h3>
                </div>
            </div>



        </div>
    );
};

export default About;