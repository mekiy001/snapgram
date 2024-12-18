import { Link, useLocation } from 'react-router-dom';
import { bottombarLinks } from '../../constants';

function Bottombar() {
    const { pathname } = useLocation();

    return(
        <section className="bottom-bar">
            {bottombarLinks.map((link => {
              return(
                <Link to={link.route} key={link.label}  className='bottomsidebar-link group flex-center flex-col'>
                    <img 
                      src={link.imgURL}
                      alt={link.label}
                      className="group-hover:invert-white bg-center"
                    />
                    <p className='tiny-medium'>{link.label}</p>
                </Link>
              )
            }))}
        </section>
    );
}

export default Bottombar;