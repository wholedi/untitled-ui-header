import video from '../../../../assets/video.png'
import './style.css'

const DropdownOtherItem = () => {
    return (
        <span className="dropdown__other_item">
            <img className="dropdown__other_item-image" src={video} alt="video"/>
            <span>
                <span className="dropdown__item_title">How to get started</span>
                <span className="dropdown__item_text">
                    Jump right in-get an overview of the basics and get
                    started on building.
                </span>
                <span className="dropdown__other_link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6941C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 8L16 12L10 16V8Z" stroke="#6941C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <a className="dropdown__item_link" href="/">Watch video</a>
                </span>
            </span>
        </span>
    );
};

export default DropdownOtherItem;