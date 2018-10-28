import React, {Component} from 'react';

class VideoArea extends Component {
    render() {
        return (
            <section className="video-area">
                <div className="container">
                    <div className="row justify-content-center align-items-center flex-column">
                        <a className="play-btn" href="">
                            <img src="img/play-btn.png" alt=""/>
                        </a>
                        <h3 className="pt-20 pb-20 text-white">We Always serve the vaping hot and delicious foods</h3>
                        <p className="text-white">See our foods serving</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default VideoArea;
