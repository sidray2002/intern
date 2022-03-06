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


   const page1_check = (event) => {
    event.preventDefault();
    let i=0,c=0;
       for(i=0;i<iniPhone.length;i++)
       {
            if (iniPhone.charAt(i) === '9' ||
                iniPhone.charAt(i) === '1' ||
                iniPhone.charAt(i) === '2' ||
                iniPhone.charAt(i) === '3' ||
                iniPhone.charAt(i) === '4' ||
                iniPhone.charAt(i) === '5' ||
                iniPhone.charAt(i) === '6' ||
                iniPhone.charAt(i) === '7' ||
                iniPhone.charAt(i) === '8' ||
                iniPhone.charAt(i) === '0') 
            {
            
            }
            else{
                c++;
            }
    }
    
    if(c===0)
    {
    c=1;

    for(i=0;i<iniEmail.length;i++)
       {
           if(iniEmail.charAt(i)==='@') 
           {
               c=0; break;
           }
       
    } 
    }
         if(c===0)
    {
    c=1;

       if(iniEmail.substring(iniEmail.length-4,iniEmail.length)!==".com" ||
       iniEmail.substring(iniEmail.length-4,iniEmail.length)!==".in")
       {
           c=0;
       }
    } 
       if(iniName==="" || iniEmail==="" || iniPhone==="" || c!==0) 
       {
        document.getElementsByClassName('error')[0].style.display = 'block';
       }
       else{
        page_1Submit(event);
       }
   }

    const page_1Submit = (event) => {
        event.preventDefault();
        document.getElementsByClassName('Page_1')[0].style.display = 'none';
        document.getElementsByClassName('Page_2')[0].style.display = 'block';
        document.getElementsByClassName('circles')[1].classList.add('active-circles');
        document.getElementsByClassName('error')[0].style.display = 'none';
    }

    const page_1Back = (event) => {
        event.preventDefault();
        document.getElementsByClassName('Page_1')[0].style.display = 'block';
        document.getElementsByClassName('Page_2')[0].style.display = 'none';
        document.getElementsByClassName('circles')[1].classList.remove('active-circles');
    }
    const page_2Back = (event) => {
        event.preventDefault();
        document.getElementsByClassName('Page_2')[0].style.display = 'block';
        document.getElementsByClassName('Page_3')[0].style.display = 'none';
        document.getElementsByClassName('circles')[2].classList.remove('active-circles');
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

    const page2_check = (event) => {
        event.preventDefault();
        if(iniAddress==="") 
       {
        document.getElementsByClassName('error')[0].style.display = 'block';
       }
       else{
        page_2View(event);
       }
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
                        <h1>Details</h1>
                        <label> Name </label>
                        <input type='text' onChange={updateName} name='name' value={iniName} />
                        <br />

                        <label> Email </label>
                        <input type='email' onChange={updateEmail} name='email' value={iniEmail} />
                        <br />

                        <label> Phone </label>
                        <input type='tel' onChange={updatePhone} name='phone' value={iniPhone}/>
                        <br />
                        <div className='button-div-upd'>
                            <button onClick={page1_check }> Continue </button>
                        </div>
                    </form>


                    <form className='Page_2'>
                    <h1>More Details</h1>
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
                            <button onClick={page2_check}> Continue </button>
                        </div>
                    </form>

                    <div className='Page_3'>
                        <h1>Preview</h1>
                        <p>Name: {iniName}</p>
                        <p>Email: {iniEmail}</p>
                        <p>Phone: {iniPhone}</p>
                        <p>Gender: {iniGender}</p>
                        <p>Address: {iniAddress}</p>
                        <div className='button-div'>
                        <button onClick={page_2Back}> Back </button>
                        <button type="submit"> Submit </button>
                    </div></div>

                    <div className='error'>
                    Check Again    
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
