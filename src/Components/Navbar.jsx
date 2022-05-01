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
                        <form className="d-flex"><button className="btn btn-outline-light" onClick={e=>{e.preventDefault()}}>We offer you career</button>
                            
                        </form>
                    </div>
                </div>
            </nav>
            {/****************************************************************************************************/}
            
            {/****************************** Add country modal ************************************/}
            <div className="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Data</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input
                                    type="text"
                                    className='w-15 form-control m-1'
                                    placeholder="Country Name"
                                    name="name"
                                />
                                <input
                                    type="text"
                                    className='form-control m-1'
                                    placeholder="Country Code"
                                    name="code"
                                />
                                <input
                                    type="text"
                                    className='form-control m-1'
                                    placeholder="Country Capital"
                                    name="capital"
                                />
                                <input
                                    type="text"
                                    className='form-control m-1'
                                    placeholder="Flag Link"
                                    name="image"
                                />
                                <input
                                    type="text"
                                    className='form-control m-1'
                                    placeholder="Country Unicode"
                                    name="unicode"
                                />
                                <button type="button" className="btn btn-warning mt-3">Add Country</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/****************************************************************************************************/}
        </div>
    )
}

export default Navbar