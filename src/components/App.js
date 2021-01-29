import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './../components/SearchBar';
import VideoList from './../components/VideoList';
import VideoDetail from './../components/VideoDetail';

const KEY = 'AIzaSyCBMZ6Yl_EqkL46E_PAP_1W4Y4kfurDp-E'
class App extends React.Component {

    state = { videos: [] , selectedVideo : null }

    // Lifecycle methods
    componentDidMount(){
        this.onTermSubmit('buildings')
    }

    onTermSubmit = async (term) => {
        //console.log(term)
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResult: 5,
                key: KEY
            }
            
        })
        //console.log(response.data.items)
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});

    }
    // onVideoSelect is the callback function
    onVideoSelect = (video) => {
        //console.log('from the app', video)
        this.setState({selectedVideo: video})
    }

    render(){
        return (
            <div className='ui container'> 
                <SearchBar afterSubmit={this.onTermSubmit}/>
                {/* I have {this.state.videos.length} videos. */}
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo }/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} videoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default  App


// key note when we are communicating form the child to the parent we use the callback