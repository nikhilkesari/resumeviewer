import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfilio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


    class App extends Component {
        constructor(props) {
            super(props);
            this.state = {
                foo: 'bar',
                resuemeData : {}
            }
        }
        getResumeData() {
            $.ajax({
                url: 'http://localhost:3000/resumeData.json',
                dataType: 'json',
                cache: false,
                success: function(data){
                    this.setState({resuemeData: data})
                }.bind(this),
                error: function (xhr, status, err) {
                    console.log(err);
                    alert(err);
                }
            })
        }
        componentDidMount() {
            this.getResumeData();
        }
        render() {
            return (
              <div className="App">
                <Header data={this.state.resuemeData.main}/>
                <About/>
                <Resume/>
                <Portfolio/>
                <Testimonials/>
                <Contact/>
                <Footer/>
              </div>
            );
          }
}

export default App;
