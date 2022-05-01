import React from 'react'

const Navbar = () => {
    return (
        <div>
            {/********************************** Navbar Component *******************************************/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-2" style={{ borderRadius: "30px", boxShadow: "2px 2px 20px black" }}>
                <div className="container-fluid">
                    <span className="navbar-brand"><b>Atlan</b></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link active" aria-current="page">Welcome To Atlan Services</span>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-light" onClick={e=>{e.preventDefault()}}>We offer you career</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/****************************************************************************************************/}
        </div>
    )
}

export default Navbar
