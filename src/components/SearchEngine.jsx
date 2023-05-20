import {useState} from 'react';
import axios from 'axios';
import SearchEngineChild from './SearchEngineChild';
import Logo from '../assets/logo.png';

function SearchEngine() {

    function presscheck(event){ if(event.key === 'Enter'){ searching(); } }

    const [search, setSearch] = useState();
    const [response, setResponse] = useState({data: []});
    const [empty, setEmpty] = useState("");

    async function searching() {
        if(empty==="") {alert('Please Enter A Validate Search Query!');setResponse({data: []});return;}
        await axios.get(`https://api.duckduckgo.com/?q=${search}&format=json`)
        .then(res => setResponse(res))
        .catch(err => setResponse({data: {Heading:"Returned 0 Searches!"}}))
        if(response.data.Heading) {
            console.log(response.data);
        }
        else {
            console.log('Returned 0 searches!');
        }
    }

    const change_value = (e) => {
        setSearch(e.target.value);
        setEmpty(e.target.value);
    }

    const changeCSS = (e) => {
        e.target.style.color = 'white';
        e.target.style.backgroundColor = 'black';
    }

    const changeCSSS = (e) => {
        e.target.style.color = 'black';
        e.target.style.backgroundColor = 'white';
    }

    return(<>
    <center><a href=""><img src={Logo} width="200px" height="100%" title="Logo" /></a><br /></center>
    <input onKeyDown={presscheck} size="40%" onChange={change_value} id="searchID" type="search" placeholder="Search..." style={{border: '0', borderRadius: '5px', padding: '13px', margin: '10px', backgroundColor: 'black', color: 'white'}} />
    <button onMouseOut={changeCSSS} onMouseOver={changeCSS} onClick={searching} style={{color: '#3e0303', marginRight: '5px', marginBottom: '10px', backgroundColor: 'rgb(247 247 247)'}}>Search</button><br />
    <div id='search-text'>{ response.data.Heading ? <SearchEngineChild valuemain={response.data} /> : <div style={{color: '#3e0303'}}> Search It 😁 </div> }</div>
    </>);

}

export default SearchEngine;