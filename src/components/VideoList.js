import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Image, Dimmer, Loader } from 'semantic-ui-react';
import { reproduzVideo } from '../store/actions/reproduz-video';

import './styles-components.css'
import { dispatch } from '../../../../../AppData/Local/Microsoft/TypeScript/3.1/node_modules/rxjs/internal/observable/pairs';
class VideoList extends Component {

    renderVideo(video) {
        return (
            <div className="video-list">
                <List animated verticalAlign='middle' key={video.etag}>
                    <List.Item onClick={() => this.props.reproduz(video)}>
                        <List.Content>
                            <List.Header>{video.snippet.title}</List.Header>
                        </List.Content>
                        <Image className="img-thumb" src={video.snippet.thumbnails.high.url} />
                    </List.Item>
                </List>
            </div>
        )
    }

    render() {

        return (
            <div className="video-list">
                {
                    this.props.carregando && (<Dimmer active inverted>
                        <Loader size="medium">carregando...</Loader>
                    </Dimmer>)
                }
                {
                    this.props.videos.map(video => {
                        console.log('meu video')
                        return this.renderVideo(video)
                    })
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reproduz: (video) => dispatch(reproduzVideo(video))
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.busca.videos,
        carregando: state.busca.carregando,
        erro: state.busca.erro
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)