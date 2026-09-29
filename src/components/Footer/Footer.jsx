import './Footer.css'

function Footer(){
    return(
        <footer className='footer'>
            <div className='footer-container'>
                <span>&copy; 2026 Studio Alfa</span>
                <div className='footer-icons'>
                    <a href="#" aria-label='Instagram'>&#x1F4F7</a>
                    <a href="#" aria-label='Git-Hub'>&#x1F4BB</a>
                    <a href="#" aria-label='Email'>&#x2729</a>
                </div>
            </div>
        </footer>

    )

}

export default Footer;