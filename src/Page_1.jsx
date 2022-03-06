import React, { useState } from 'react';
import './Page_1.css';


const Page_1 = () => {
    // Check();
    const [iniName, setName] = useState('');
    const updateName = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
    }

    const [iniEmail, setEmail] = useState('');
    const updateEmail = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    const [iniPhone, setPhone] = useState('');
    const updatePhone = (event) => {
        setPhone(event.target.value);
        console.log(event.target.value);
    }

    const page_1Submit = (event) => {
        event.preventDefault();
        document.getElementsByClassName('Page_1')[0].style.display = 'none';
        document.getElementsByClassName('Page_2')[0].style.display = 'block';
        document.getElementsByClassName('circles')[1].classList.add('active-circles');
        // document.getElementsByClassName('circles')[0].classList.remove('active-circles');
    }

    const page_1Back = (event) => {
        event.preventDefault();
        document.getElementsByClassName('Page_1')[0].style.display = 'block';
        document.getElementsByClassName('Page_2')[0].style.display = 'none';
        document.getElementsByClassName('circles')[1].classList.remove('active-circles');
    }

    const [iniGender, setGender] = useState('male')
    const updateGender = (event) => {
        setGender(event.target.value);
        console.log(iniGender);
    }

    const [iniAddress, setAddress] = useState('')
    const updateAddress = (event) => {
        setAddress(event.target.value);
    }

    const page_2View = (event) => {
        event.preventDefault();
        document.getElementsByClassName('Page_2')[0].style.display = 'none';
        document.getElementsByClassName('Page_3')[0].style.display = 'block';
        document.getElementsByClassName('circles')[2].classList.add('active-circles');
        // document.getElementsByClassName('circles')[1].classList.remove('active-circles');
    }

    return (

        <>
            <div className='body-page'>
                <div className='form-container'>
                    <form className='Page_1'>
                        <label> Name </label>
                        <input type='text' onChange={updateName} name='name' value={iniName} />
                        <br />

                        <label> Email </label>
                        <input type='email' onChange={updateEmail} name='email' value={iniEmail} />
                        <br />

                        <label> Phone </label>
                        <input type='tel' onChange={updatePhone} name='phone' value={iniPhone} />
                        <br />
                        <div className='button-div-upd'>
                            <button onClick={page_1Submit}> Continue </button>
                        </div>
                    </form>


                    <form onSubmit={page_2View} className='Page_2'>
                        <label> Gender </label>
                        <select name="gender" id="" value={iniGender} onChange={updateGender}>
                            <option value='male'> Male </option>
                            <option value='female'> Female </option>
                        </select>
                        <br />

                        <label> Address </label>
                        <input type='text' onChange={updateAddress} name='address' value={iniAddress} />
                        <br />

                        <div className='button-div'>
                            <button onClick={page_1Back}> Back </button>
                            <button onClick={page_2View}> Continue </button>
                        </div>
                    </form>

                    <div className='Page_3'>
                        <h1>{iniName}</h1>
                        <p>{iniEmail}</p>
                        <p>{iniPhone}</p>
                        <p>{iniGender}</p>
                        <p>{iniAddress}</p>
                    </div>

                    <div className='circle-div'>
                        <span className="circles active-circles"> 1 </span>
                        <span className="circles"> 2 </span>
                        <span className="circles"> 3 </span>
                    </div>
                </div>

            </div>

        </>
    );
}


export default Page_1;