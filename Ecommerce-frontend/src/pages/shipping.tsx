import React, { ChangeEvent, useState } from 'react'
import { BiArrowBack, BiSelectMultiple } from 'react-icons/bi';

const Shipping = () => {

    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: ""
    });

    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setShippingInfo((prev) =>
        ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className='shipping'>
            <button className='back-btn'><BiArrowBack /></button>
            <form>
            <h1>Shipping Details</h1>
                <input type="text"
                    required
                    placeholder='Address'
                    name="address"
                    value={shippingInfo.address}
                    onChange={changeHandler}
                />

                <input type="text"
                    required
                    placeholder='City'
                    name="city"
                    value={shippingInfo.city}
                    onChange={changeHandler}
                />

                <input type="text"
                    required
                    placeholder='State'
                    name="state"
                    value={shippingInfo.state}
                    onChange={changeHandler} />

                <select
                    name="country"
                    required
                    value={shippingInfo.country}
                    onChange={changeHandler}
                >
                    <option value="">Choose Country</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="india">India</option>
                </select>

                <input type="number"
                    required
                    placeholder='Pin Code'
                    name="pinCode"
                    value={shippingInfo.pinCode}
                    onChange={changeHandler}
                />

                <button type='submit'>Pay Now</button>
            </form>
        </div>
    )
}

export default Shipping