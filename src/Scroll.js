import React, { Component } from "react";

import styled from 'styled-components';
export default class Scroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };

    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });

    }

    toggleVisibility() {
        if (window.pageYOffset > 25) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }

    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    render() {

        const { is_visible } = this.state;
        return (
            <Wrap>
                <div className="scroll-to-top " >
                    {is_visible && (
                        <div onClick={() => this.scrollToTop()}>
                            <div className="div"> <i className="fa fa-angle-up  "></i></div>
                        </div>
                    )}
                </div>
            </Wrap>
        );
    }
}


const Wrap = styled.div`
.div{
    border-radius: 100%;
    position: fixed;
    bottom: 1.8rem;
    right: 1.5rem;
    animation: fadeIn 100ms ease-in-out 1s both;
    cursor: pointer;
    height: 2.6em !important;
    width: 2.6em !important;
    background: #000;
    color: white;
    z-index: 25;
    
  }
  .fa-angle-up{
      font-size: 2.6em;
      margin-left: 0.2em;
      margin-top: -0.03em;
  }

@keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`