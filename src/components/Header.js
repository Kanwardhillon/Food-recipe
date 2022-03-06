import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";

const Header = props => {
    const{search,onInputChange,handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
        <div>
    
        <div className="jumbtron">
            <h2 className="display-3"><i class="fas fa-hamburger"></i>
                Food Recipe</h2>
            <div class="input-group w-50 mx-auto">
                <input onChange={onInputChange}type="text" class="form-control" placeholder="Enter Food Item For Recipe..." aria-label="Recipient's username" aria-describedby="basic-addon2" value={search} />
                <button className="btn btn-dark">Search Recipe</button>
            </div>
        </div>
        </div>
        </form>
    )
}

export default Header;