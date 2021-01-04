import header from './block/header';
import description from './block/description';
import partners from './block/partners';
import qvality from './block/qvality';
import staff from './block/staff';
import training from './block/training';
import interest from './block/interest';
import clerksy from './block/clerksy';
import resovrce from './block/resovrce';
import call from './block/call';
import singUp from './block/singUp';
import footer from './block/footer';
import './styles/index.scss';

function init ( ) {
return    header(), 
    description(), 
    partners(), 
    qvality(), 
    staff(),
    training(),
    interest(),
    clerksy(),
    resovrce(),
    call(),
    singUp(),
    footer();
}
init();



