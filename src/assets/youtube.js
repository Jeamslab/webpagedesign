import React from 'react';

function Youtube()  {
    return (
        <div className= "custom-player-youtube">
            <iframe
            title="ytplay"
            id="player"
            type="text/html"
            style={{width: "100%", height: "100%"}}
            src="https://www.youtube.com/channel/UCGYay65aJoa0lvZ-41oF2BA?view_as=subscriber"
            frameBorder="0"> 
                
            </iframe>
        </div>
    )
}

export default Youtube;
