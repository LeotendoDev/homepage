import React, {Component} from 'react';
import './typewriter.css'
import './header.css'
import './animated_text.scss'

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul>
                        {/* end #nav */}
                    </nav>
                    {/* end #nav-wrap */}
                    <div className="row banner">
                        <div className="banner-text">
                            <div class="typewriter">
                                <h1>Leonard Steinhoff</h1>
                            </div>
                            <br />
                            <div class="content">
                                <div class="content__container">
                                    <p class="content__container__text">
                                        I'm a 
                                    </p>
                                    <ul class="content__container__list">
                                        <li class="content__container__list__item">Frontend Developer</li>
                                        <li class="content__container__list__item">Backend Developer</li>
                                        <li class="content__container__list__item">App Developer</li>
                                        <li class="content__container__list__item">Pentester</li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <hr/>
                            <ul className="social">
                                <li><a href="#"><i className="fa fa-facebook"/></a></li>
                                <li><a href="#"><i className="fa fa-twitter"/></a></li>
                                <li><a href="#"><i className="fa fa-github"/></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"/></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}

