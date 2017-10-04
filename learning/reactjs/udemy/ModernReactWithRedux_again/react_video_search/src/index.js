import React,{Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import YTSearch from "youtube-api-search";
import _ from "lodash";
const API_KEY = "AIzaSyDY7_tKbdJE96Y3ihM061rZdm8O6Sxgh_s";



// const App=()=>{
//     return(
//         <div>
//             <SearchBar/>
//         </div>
//     )
// }

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo:null,
            term:"hockey"
        };
        
    }
    
    componentDidMount(){
       this.videoSearch(this.state.term);    
    }

    videoSearch(term){
        console.log(term)
        YTSearch({key:API_KEY,term:term},(videos)=>{
           this.setState({
               videos,
               selectedVideo:videos[0]
           })
        });
    }

    onVideoSelect(selectedVideo){
        this.setState({
               selectedVideo
           })
    }

    render(){
        const {videos,selectedVideo, term}= this.state;
        const videoSearch=_.debounce((term)=>this.videoSearch(term),300);
        return (
            <div>
                <SearchBar term={term} onVideoSearch={videoSearch}/>
                 <VideoDetail video={selectedVideo}/>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));