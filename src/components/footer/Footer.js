import React from 'react';
import '../../assets/css/main.scss';

function Footer() {
    return (
        <footer className="footer text-center py-2 theme-bg-dark">
            <small className="copyright">
                Theme based on{' '}
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
            </small>
        </footer>
    );
}

export default Footer;
