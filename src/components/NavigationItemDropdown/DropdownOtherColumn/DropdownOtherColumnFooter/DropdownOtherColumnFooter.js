import './style.css'

const DropdownOtherColumnFooter = () => {
    return (
        <span className="dropdown__other_footer">
            <span className="dropdown__other_footer-text">All video tutorials</span>
            <svg className="dropdown__other_footer-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#6941C6" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </span>
    );
};

export default DropdownOtherColumnFooter;