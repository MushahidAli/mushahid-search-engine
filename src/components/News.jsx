import axios from 'axios';
import {useState, useEffect} from 'react';
import NewsChild from './NewsChild'

export default function News() {

    const [news, setNews] = useState();
    var country;

    async function run() {
        await axios.get('https://ipwho.is')
        .then(res => country = (res.data.country_code))
        await axios.get(`https://gnews.io/api/v4/top-headlines?country=${country.toLowerCase()}&apikey=c7f0ede20579fad5685c9ec335d8e8fa`)
        .then(val => setNews(val.data))
    }

        useEffect(() => {
        run();
        },[country]);

    return(<>
    <div id='search-text' style={{textAlign: 'center'}}>{ news ? <NewsChild valuemain={news} /> : <div style={{color: '#3e0303'}}> Loading 😁 </div> } </div>
    </>);
}