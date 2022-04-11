import Brock from './Brock';
import Misty from './Misty';
import Surge from './Surge';
import Erika from './Erika';
import Koga from './Koga';
import Sabrina from './Sabrina';
import Blaine from './Blaine';
import Giovanni from './Giovanni';
import Lorelei from './Lorelei';
import Bruno from './Bruno';
import Agatha from './Agatha';
import Lance from './Lance';
import Green from './Green';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from './Modal';
import { useRef } from 'react';

const Content = () => {

    const modalBrock = useRef(null);
    const modalMisty = useRef(null);
    const modalSurge = useRef(null);
    const modalErika = useRef(null);
    const modalKoga = useRef(null);
    const modalSabrina = useRef(null);
    const modalBlaine = useRef(null)
    const modalGiovanni = useRef(null);
    const modalLorelei = useRef(null);
    const modalBruno = useRef(null);
    const modalAgatha = useRef(null);
    const modalLance = useRef(null);
    const modalGreen = useRef(null);

    return(
        <div>
            <div className='leaders'>
                <h2>Gym Leaders</h2>
                    {/* Brock */}
                    <img src='https://www.serebii.net/pokearth//trainers/frlg/30.png' alt='Brock' onClick={() => modalBrock.current.open()}/>
                    <Modal ref={modalBrock}>
                        <Brock />
                    </Modal>
                    {/* Misty */}
                    <img src='https://www.serebii.net/pokearth//trainers/frlg/31.png' alt='Misty' onClick={() => modalMisty.current.open()}/>
                    <Modal ref={modalMisty}>
                        <Misty />
                    </Modal>
                    {/* Surge */}
                    <img src='https://www.serebii.net/pokearth//trainers/frlg/32.png' alt='Brock' onClick={() => modalSurge.current.open()}/>
                    <Modal ref={modalSurge}>
                        <Surge />
                    </Modal>
                    {/* Erika */}
                    <img src='https://www.serebii.net/pokearth//trainers/frlg/33.png' alt='Brock' onClick={() => modalErika.current.open()}/>
                    <Modal ref={modalErika}>
                        <Erika />
                    </Modal>
                    {/* Koga */}
                    <img src='https://www.serebii.net/pokearth//trainers/frlg/34.png' alt='Brock' id='koga' onClick={() => modalKoga.current.open()}/>
                    <Modal ref={modalKoga}>
                        <Koga />
                    </Modal>
                    {/* Sabrina */}
                    <img src='https://www.serebii.net/pokearth//trainers/frlg/35.png' alt='Brock' id='sabrina' onClick={() => modalSabrina.current.open()}/>
                    <Modal ref={modalSabrina}>
                        <Sabrina />
                    </Modal>
                    {/* Blaine */}
                    <img src='https://www.serebii.net/pokearth//trainers/frlg/36.png' alt='Brock' id='blaine' onClick={() => modalBlaine.current.open()}/>
                    <Modal ref={modalBlaine}>
                        <Blaine />
                    </Modal>
                    {/* Giovanni */}
                    <img src='https://www.serebii.net/pokearth//trainers/frlg/37.png' alt='Brock' id='giovanni' onClick={() => modalGiovanni.current.open()}/>
                    <Modal ref={modalGiovanni}>
                        <Giovanni />
                    </Modal>
            </div>
            <div className='elite4'>
                <h2>Elite 4</h2>
                    {/* Lorelei */}
                    <img src='https://www.serebii.net/pokearth/trainers/frlg/18.png' alt='Lorelei' onClick={() => modalLorelei.current.open()}/>
                    <Modal ref={modalLorelei}>
                        <Lorelei />
                    </Modal>
                    {/* Bruno */}
                    <img src='https://www.serebii.net/pokearth/trainers/frlg/19.png' onClick={() => modalBruno.current.open()}/>
                    <Modal ref={modalBruno}>
                        <Bruno />
                    </Modal>
                    {/* Agatha */}
                    <img src='https://www.serebii.net/pokearth/trainers/frlg/20.png' onClick={() => modalAgatha.current.open()}/>
                    <Modal ref={modalAgatha}>
                        <Agatha />
                    </Modal>
                    {/* Lance */}
                    <img src='https://www.serebii.net/pokearth/trainers/frlg/21.png' onClick={() => modalLance.current.open()}/>
                    <Modal ref={modalLance}>
                        <Lance />
                    </Modal>
            </div>
                <div className='elite4'>
                    <h2>Champion</h2>
                    <img src='https://www.serebii.net/pokearth/trainers/frlg/10.png' alt='Green' onClick={() => modalGreen.current.open()}/>
                    <Modal ref={modalGreen}>
                        <Green />
                    </Modal>
                </div>
        </div>
    )
}

export default Content