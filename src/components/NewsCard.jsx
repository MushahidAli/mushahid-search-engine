export default function NewsCard({valuemain}) {
    return(<>
    
    {valuemain ? (
        <div title="Click To Read The Article!" style={{width: '100%', border: '0', borderRadius: '5px', backgroundImage: 'linear-gradient(lightblue 67%,black)'}}>
            <a target="_blank" href={valuemain.url}>
            <img  width="100%" height="200px" style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} src={valuemain.image ? (valuemain.image) : ('/src/assets/NoImg.png')} /><br />
            {valuemain.publishedAt ? (<span style={{color: 'black'}}>{"Published At: "+valuemain.publishedAt}</span>) : ('')}<br />
            {valuemain.source.name ? (<span style={{color: 'orange'}}>{"By "+valuemain.source.name}</span>) : ('')}<br /><hr />
            {valuemain.title ? (<span style={{color: 'white'}}>{valuemain.title}</span>) : ('')}
            </a>
        </div>
        ) : ('')}

    </>);
}