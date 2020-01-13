import React, { Component } from 'react';
import '../../assets/css/main.scss';

class Footer extends Component {
    render() {
        const currYear = new Date().getFullYear();
        return (
            <footer className="footer text-center py-2 theme-bg-dark">
                <small className="copyright">
                    Copyright ©{currYear} by{' '}
                    <a href="/" rel="noopener noreferrer">
                        <strong>Marta Pancaldi</strong>
                    </a>
                    <span className="responsive-hide">
                        .&emsp; Theme based on{' '}
                        <a
                            href="https://github.com/xriley/DevBlog-Theme"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <strong>DevBlog</strong>
                        </a>{' '}
                        by{' '}
                        <a
                            href="http://themes.3rdwavemedia.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Xiaoying Riley
                        </a>
                    </span>
                </small>
            </footer>
        );
    }
}

export default Footer;
