import React from 'react';

function Footer() {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center">
                    <img src='/assets/img/kaomoji.gif'/>
                    <div className="text-center text-sm italic text-gray-600 mt-1">
                        <p>© 2025. All rights reserved.</p>
                        <p className="mt-1">Made with ♡</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
