import React from 'react';
import { Router, Route, IndexRoute, Link, History } from "react-router";

export const Home = React.createClass({
  render() {
    return (
    <div>
      <Hero />
      <HomeBoxes />
      <CourseWithTopics />
      <CourseWithLessons />
    </div>
    )
  }
});

export const About = React.createClass({
  render() {
    return (
      <div>
        <h2>About</h2>
        {this.props.children}
      </div>
    );
  }
});

export const App = React.createClass({
  render() {
    return (
      <div>
        <MobileHeader />
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
});

const ButtonMixin = {
  propTypes: {
    color:  React.PropTypes.oneOf(['yellow', 'orange', 'redorange', 'red']),
    href: React.PropTypes.string.isRequired
  },
  
  getDefaultProps() {
    return {color: 'yellow'}; 
  }
};


export const Button = React.createClass({
  mixins: [ButtonMixin],
  render() {
    return (
      <a href="#" className={"btn dc-btn-"+this.props.color}>{this.props.children}</a>
    )   
  } 
})

export const LinkButton = React.createClass({
  mixins: [ButtonMixin],
  
  render() {
    return (
      <Link to={this.props.href} className={"btn dc-btn-"+this.props.color}>{this.props.children}</Link>
    );   
  } 
});

export const TopicButton = React.createClass({
  mixins: [ButtonMixin],
  
  render() {
    return (
      <li className="span4">
       <Link to={this.props.href} className={"btn btn-large btn-block dc-btn-"+this.props.color}><h3>{this.props.children}</h3></Link>
      </li>
    );   
  } 
});

export const LessonThumbnail = React.createClass({
   propTypes: {
    thumbnailid: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
    lessontitle: React.PropTypes.string.isRequired
  },
  
  getDefaultProps() {
    return {color: 'yellow'}; 
  },
  
  render() {
    return (
      <div className="span2">
        <a href={this.props.href} className="thumbnail vertical-shadow suggested-action">
          <img src={'http://img.youtube.com/vi/'+this.props.thumbnailid+'/default.jpg'} />
          <p>{this.props.lessontitle}</p>
        </a>
      </div>
    );   
  } 
});



export const Header = React.createClass({
  render() {
    return (
      <div className="header hidden-phone">
        <div className="navbar">
          <div className="navbar-inner">
            <div className="container">
              <a id="desktopbrand" className="brand" href="http://www.daveconservatoire.org"><img src="/img/dclogo3.png" alt="Dave Conservatoire"   /></a>
              <a className="brand" id="mobilebrand" href="http://www.daveconservatoire.org"><img src="/img/dcvert.png" alt="Dave Conservatoire" /></a>
              <div className="navbar">
                <div className="navbuttons">
                  <a href="/about" className="btn dc-btn-yellow">About</a>
                  <a href="/donate" className="btn dc-btn-orange">Donate</a>
                  <a href="/tuition" className="btn dc-btn-redorange">Personal Tuition</a>			
                  <a href="/contact" className="btn dc-btn-red">Contact</a>
                  <a href="/login" className="btn dc-btn-red loginbutton">Login</a>
                  <span id="socialmediaicons">
          					<a href="http://www.youtube.com/daveconservatoire" target="_blank"><img className="socialicon" src="/img/socialicons/youtube.png" /></a>
          					<a href="http://www.twitter.com/dconservatoire" target="_blank"><img className="socialicon" src="/img/socialicons/twitter.png" /></a>
          					<a href="http://www.facebook.com/daveconservatoire" target="_blank"><img className="socialicon" src="/img/socialicons/facebook.png" /></a>
          					<a href="https://plus.google.com/113803255247330342246" rel="publisher" target="_blank"><img className="socialicon" src="/img/socialicons/gplus.png" /></a>
                  </span>
		            </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    )
  }
});

export const MobileHeader = React.createClass({
  render() {
    return (
        <div className="navbar">
          <div className="navbar-inner visible-phone">
            <div className="container">
              <a className="btn btn-navbar" data-toggle="collapse" data-target="#mainfoldout">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </a>
              <a className="brand mobilenav" href="http://www.daveconservatoire.org">  <span className="mobiledc">Dave Conservatoire</span></a>
              <div className="nav-collapse collapse navbar-responsive-collapse" id="mainfoldout">
                <ul className="nav">
                  <a href="/about" className="btn btn-block dc-btn-yellow">About</a>
      						<a href="/donate" className="btn btn-block dc-btn-orange">Donate</a>
      						<a href="/tuition" className="btn btn-block dc-btn-redorange">Personal Tuition</a>
      						<a href="/contact" className="btn btn-block dc-btn-red">Contact</a>
      				    <a href="/login" className="btn dc-btn-red btn-block loginbutton">Login</a>
      					</ul>
              </div> 
            </div>
          </div>
        </div>        
    )
  }
});

export const Footer = React.createClass({
  render() {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <div className="container">
					  <div className="row">
              <div className="span12">
                <div className="copyright"> &copy; Dave Conservatoire 2016. The videos and exercises on this site are available under a <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank">CC BY-NC-SA Licence</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export const Hero = React.createClass({
  render() {
    return (
      <div className="banner">
        <div className="container intro_wrapper">
          <div className="inner_content">
            <div className="welcome_index animated fadeInDown">Welcome to <span className="dc-text-orange">Dave Conservatoire</span> - a free online music school, <br/>aiming to  provide a world-class music education for <span className="dc-text-orange">everyone</span>.
          </div>
        </div>
      </div>  
    </div>
    )
  }
});


export const HomeBoxes = React.createClass({
  render() {
    return (
      <div className="container wrapper">
        <div className="inner_content">
          <div className="pad45"></div>
          <div className="row">
            <div className="span3">
              <div className="tile introboxes">
                <div className="intro-icon-disc cont-large"><i className="icon-film intro-icon-large dc-text-yellow"></i></div>
                  <h6><small>WATCH</small></h6>
                  <p>Join Dave, your friendly guide, in over 100 video music lessons, introducing how music works from the very beginning.</p>
                  <a id="getstarted" className="btn btn-primary  btn-custom btn-rounded btn-block dc-btn-yellow">Get Started</a>
                </div>
                <div className="pad25"></div>
             </div>
             <div className="span3">
                <div className="tile introboxes">
                  <div className="intro-icon-disc cont-large"><i className="icon-star intro-icon-large dc-text-orange"></i></div>
                  <h6><small>PRACTICE</small></h6>
                  <p>Test your understanding as you go, with interactive exercises designed to enhance your awareness and sensitivity to music.</p>
                  <a href="/login" className="btn btn-primary  btn-custom btn-rounded btn-block dc-btn-orange">Sign in to track your progress</a>
                </div>
                <div className="pad25"></div>
             </div>
             <div className="span3">
                <div className="tile introboxes">
                  <div className="intro-icon-disc cont-large"><i className="icon-info intro-icon-large dc-text-redorange"></i></div>
                  <h6><small>ABOUT</small></h6>
                  <p>Find out all about Dave Conservatoire; the story so far, where we hope to head in the future and how you can lend a hand.</p>
                  <a href="/about" className="btn btn-primary  btn-custom btn-rounded btn-block dc-btn-redorange">Find out more</a>
                </div>
                <div className="pad25"></div>
             </div>
             <div className="span3">
                <div className="tile introboxes">
                  <div className="intro-icon-disc cont-large"><i className="icon-money  intro-icon-large dc-text-red"></i></div>
                  <h6> <small>DONATE</small></h6>
                  <p>Dave Conservatoire will be totally free forever.  Our dream is that no-one should miss out on having music in their life. </p>
                  <a href="/donate" className="btn btn-primary  btn-custom btn-rounded btn-block dc-btn-red">How you can help</a>
                </div>
                <div className="pad25"></div>
             </div>
          </div>
        </div>
      </div>
    )
  }
});


export const CourseWithTopics = React.createClass({
  render() {
    return (
      <div>
        <CourseBanner coursetitle="Music For Beginners" coursesubtitle="Want to learn music? Start here." /> 
        <div className="pad30"></div>
        <div className="container wrapper">
          <div className="thumbnails tabbable">
            <ul className="courselist">
              <TopicButton href="/topic/getting-started">Getting Started</TopicButton>  
            </ul>
          </div>
        </div>
        <div className="pad30"></div>
      </div>
    )
  }
});

export const CourseWithLessons = React.createClass({  
  render() {
    return (
      <div>
        <CourseBanner coursetitle="Improvisation with Harry" coursesubtitle="Only Ten Lessons" /> 
        <div className="pad30"></div>
        <div className="container wrapper">
          <div className="tab-content">
            <div className="tab-pane active" id="topic-all">
              <div className="thumbnails">
                <div className="row thumbnailsrow">
                  <LessonThumbnail href="#" lessontitle="Here is the first lesson" thumbnailid="6gNQx8mRNZk" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export const CourseBanner = React.createClass({
  render() {
    return (
     <div className="banner">
        <div className="container intro_wrapper">
          <div className="inner_content">
            <div className="pad30"></div>
            <h1 className="title">{this.props.coursetitle}</h1>
            <h1 className="intro">{this.props.coursesubtitle}</h1>
          </div>
        </div>
      </div>  
    )
  }
});






