export default function SearchEngineChild({valuemain}) {

    return(<div style={{backgroundColor: '#c1bdbd'}}>
    <fieldset>
        {
            valuemain.AbstractURL ? (
                <div><b>'<a target="_blank" href={valuemain.AbstractURL}>{valuemain ? valuemain.Heading : ''}</a>'</b></div>            ) : (
                <div><b>'{valuemain ? valuemain.Heading : ''}'</b></div>
            )
        }
        {
            valuemain.Image ? (
                <div><img style={{borderRadius: '5px'}} width="300px" height="200px" src={valuemain.Image ? 'https://duckduckgo.com'+valuemain.Image : ''} /></div>
            ) : ('')
        }
        <div>{valuemain.AbstractText ? valuemain.AbstractText : ''}</div>
        <div>{valuemain.Answer ? decodeURIComponent(valuemain.Answer).replace('&lt;','<').replace('&gt;','>') : ''}</div>
        <div>
            {valuemain.Infobox ? valuemain.Infobox.content.map((abc) => <div style={{border: '1px solid grey', borderRadius: '5px'}}>{abc.label=="Instance of" ? ('') : (
                <center><table cellPadding={5} style={{border: '1px solid red'}}> <tr><td> {abc.label +" : "+ JSON.stringify(abc.value)} </td></tr></table></center>
            )}</div>) : ''}
        </div>
        <div style={{border: '1px solid grey', borderRadius: '2px'}}>
            {valuemain.Results ? (
               valuemain.Results.map((resultvalue) => <div>Results -&gt; <a target="_blank" href={resultvalue.FirstURL}>{resultvalue.FirstURL}</a> = {resultvalue.Text}</div>)
            ) : ('')}
        </div>
        <div style={{border: '1px solid grey', borderRadius: '2px', textAlign: 'left'}}>
            {valuemain.RelatedTopics ? ('Search Results :') : ('')}
            {valuemain.RelatedTopics ? (
               valuemain.RelatedTopics.map((relval) => <div style={{padding: '30px'}}><a target="_blank" href={relval.FirstURL}>{relval.FirstURL}</a> <br /> {relval.Text} </div>)
            ) : ('')}
        </div>
    </fieldset>
    </div>);
}