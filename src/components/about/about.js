import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/profilepic.jpg" alt=""/>
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p> Hello, my name is Leonard Steinhoff. 
                                I'm a 12 year old full stack developer from Germany. 
                                I'm also interested in operating system development. 
                            </p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>Leonard Steinhoff</span><br/>
                                        <span>Canary Wharf<br/>
                    London E14 9WH UK
                  </span><br/>
                                        <span>(+49) 718 8331 9041</span><br/>
                                        <span>leonardsteinhoff@protonmail.com</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="#" className="button"><i className="fa fa-download"/>Download
                                            Resume</a>
                                    </p>
                                </div>
                            </div>
                            {/* end row */}
                        </div>
                        {/* end .main-col */}
                    </div>
                </section>
                {/* About Section End*/}
            </React.Fragment>
        );
    }
}
