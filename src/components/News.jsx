import axios from 'axios';
import {useState, useEffect} from 'react';
import NewsChild from './NewsChild'

export default function News() {

    const [news, setNews] = useState();
    var country;

    async function run() {
        await axios.get('https://ipwho.is')
        .then(res => country = (res.data.country_code))
        await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=7fd87fcafbbf4a6eb80653b5a2138a17`)
        .then(val => setNews(val.data))
    }

        useEffect(() => {
        run();
        },[country]);

    return(<>
    <div id='search-text' style={{textAlign: 'center'}}>{ news ? <NewsChild valuemain={news} /> : 'Loading 😁' } </div>
    </>);
}