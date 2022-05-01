/************************* Imports ********************************/
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
{/****************************************************************************************************/}


const CountriesTables = () => {
    {/***************************** State for management of country list********************************************/ }
    const [countries, setCountries] = useState([]);
    {/****************************************************************************************************/ }

    {/***************************** State for filtering or search ********************************************/ }
    const [search, setSearch] = useState();
    const [filteredCountries, setFilteredCountries] = useState([]);
    {/****************************************************************************************************/ }

    {/************************* Fetching data from json server ***********************************************/ }
    const getCountries = async () => {
        try {
            const response = await axios.get("http://localhost:3004/user")
            setCountries(response.data)
            setFilteredCountries(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    {/***************************************** Fetching ends **********************************************************************/ }


    {/*************************** Displaying data to datatable *****************************************************/ }
    useEffect(() => {
        getCountries();
    }, []);
    {/****************************************************************************************************/ }

    {/************************* delete countries data *****************/ }
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3004/user/${id}`)
            .then(() => {
                alert(`✔︎ Record deleted successfully`);
            })
            .catch(e => alert(e))
            getCountries();
    }
    {/****************************************************************************************************/ }


    {/************************************************** Refresh button ***********************************/ }
    const refresh = ()=>{
        getCountries()
    }
    {/****************************************************************************************************/ }



    {/***************** Displaying filtered or searched data to datatable ***************/ }
    useEffect(() => {
        const result = countries.filter(country => {
            return country.name.toLowerCase().match(search.toLowerCase());
        })
        setFilteredCountries(result)
    }, [search])
    {/****************************************************************************************************/ }


    {/****************************** Columns of datatable ******************************************************/ }
    const columns = [
        {
            name: "Country Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Country Code",
            selector: (row) => row.code,
            sortable: true
        },
        {
            name: "Dial Code",
            selector: (row) => row.dial_code,
            sortable: true,
        },
        {
            name: "Flag",
            selector: (row) => <img src={row.flag} width={50} height={50} alt="Country flags" />,
            sortable: true
        },
        {
            name: "Country Unicode",
            selector: (row) => row.unicode,
            sortable: true
        },
        {
            name: "Query",
            cell: (row) => [
                <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#editModal"><img height={30} width={30} src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/344/ffffff/external-edit-interface-kiranshastry-solid-kiranshastry.png" alt='edit' /></button>,
                <button className='btn btn-danger m-3' onClick={() => deleteUser(row.id)}> <img height={30} width={30} src="https://img.icons8.com/ios-glyphs/344/ffffff/filled-trash.png" alt='Delete' /></button>
            ]
        },

    ]
    {/****************************************************************************************************/ }



    return (
        <>
            <div className='container mt-3 dataTableDiv'>
                {/******************************** Datatable Details ************************************************/}
                <DataTable
                    title="🚩  Countries Lists"
                    columns={columns}
                    data={filteredCountries}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='370px'
                    selectableRows
                    highlightOnHover
                    actions={<button className='btn btn-info' onClick={()=>refresh()}>⌘</button>}
                    subHeader
                    subHeaderComponent={
                        <input
                            type="text"
                            className='w-25 form-control '
                            placeholder='Type Country Name Here'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                border: "none",
                                borderRadius: "30px",
                                boxShadow: "5px 5px 7px black",
                                inset: "2px 2px 5px rgba(255,255,255,0.25)",
                                inset: "-3px -3px 5px rgba(0,0,0,0.5)"
                            }}
                        />
                        
                    }
                />

                {/**************************************** Edit Modal *********************************************/}
                <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Data</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
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
                                    <button type="button" className="btn btn-warning mt-3">Save Changes</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/****************************************************************************************************/}
            </div>
            <br />
        </>
    )
}

export default CountriesTables