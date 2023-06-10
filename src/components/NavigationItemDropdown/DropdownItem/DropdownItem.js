import './style.css'

const DropdownItem = (props) => {
    return (
        <span className="dropdown__item">
            <img className="dropdown__item_image" src={props.image} alt="icon"/>
             <span>
                 {props.isNew
                     ? <span className="dropdown__item_title-container">
                            <span className="dropdown__item_title">Products</span>
                            <span className="dropdown__item_title-new">New</span>
                        </span>
                     : <span className="dropdown__item_title">Products</span>
                 }

                 <span className="dropdown__item_text">Find the best solution for you.</span>
            </span>
        </span>
    );
};

export default DropdownItem;