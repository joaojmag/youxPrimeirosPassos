import './footer.css'
import maskgroup from '../../assets/maskgroup.png'

export default function Footer() {
    return (
        <div className='footer-class'>
            <div className='footer-class-textMsk'>
                Desenvolvido por:
                <img src={maskgroup} />
            </div>
        </div>
    );
}
