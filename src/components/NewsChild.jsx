import {useState, useEffect} from 'react';
import axios from 'axios';
import NewsCard from './NewsCard'

export default function NewsChild({valuemain}) {

    const [ipcontent, setIpContent] = useState({});
    
    useEffect(() => {
        axios.get('https://ipwho.is')
        .then(res => setIpContent(res.data))
    },[]);

    return(<><br /><h1 style={{color: '#3e0303'}}>Latest News: <a target="_blank" href={'https://whatismyipaddress.com/ip/'+ipcontent.ip}>{ipcontent.city}, {ipcontent.country}</a></h1>
<br /><br />
    <div id="newscard">

<NewsCard valuemain={valuemain.articles[0]} />
<NewsCard valuemain={valuemain.articles[1]} />
<NewsCard valuemain={valuemain.articles[2]} />
<NewsCard valuemain={valuemain.articles[3]} />
<NewsCard valuemain={valuemain.articles[4]} />
<NewsCard valuemain={valuemain.articles[5]} />
<NewsCard valuemain={valuemain.articles[6]} />
<NewsCard valuemain={valuemain.articles[7]} />
<NewsCard valuemain={valuemain.articles[8]} />
<NewsCard valuemain={valuemain.articles[9]} />

        </div>

        <br />
        <div style={{color: '#3e0303'}}>
            View Source : <a target="_blank" href={'https://whatismyipaddress.com/ip/'+ipcontent.ip}>{ipcontent.ip} -&gt; {ipcontent.city}, {ipcontent.country}</a><br />
            
            &lt;&copy; 2023 | <a target='_blank' href='https://github.com/MushahidAli'>Mushahid Ali</a> | All Rights Reserved /&gt;
        </div>

        </>);
}