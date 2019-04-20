import React from 'react';
import { connect } from 'react-redux';
import {Advertisement, Embed} from 'semantic-ui-react';

const VideoPlayer = props => {
    return (
        <div className="video-player">
            {
                !props.video.id &&(
                    <Advertisement style={{'height': '433px'}} unit='top banner' test="escolhar um video para reproduzir"/>
                )
            }
            {
                props.video.id && (
                    <div>
                    <Embed id={props.video.id.videoId} source="youtube" placeholder="http://s2.glbimg.com/FdcaSi3FzklixBQinqooeDdYAtc=/695x0/s.glbimg.com/po/tt2/f/original/2015/02/13/imagem115.jpg"/>
                    <p className="video-titulo">{props.video.snippet.title}</p>
                    <p className="video-descricao">{props.video.snippet.description}</p>
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = state => {
    return{
        video: state.reproduzVideo.video
    }
}

export default connect(mapStateToProps,null)(VideoPlayer);