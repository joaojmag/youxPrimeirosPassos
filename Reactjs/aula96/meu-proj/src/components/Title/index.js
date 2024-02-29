import './title.css'

export default function Title({ children, name }) {
    return (
        <div className='title'>
            {children}

            <samp>{name}</samp>
        </div>
    );
}