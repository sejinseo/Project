import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import './ProductUpload.css';
function ProductUpload() {
    const navigate = useNavigate();
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');
    const [fileImage, setFileImage] = useState('');
    const [product_name, setProduct_name] = useState('');
    const [product_desc, setProduct_desc] = useState('');
    const [product_price, setProduct_price] = useState('');


    const fileUploadHandler = (event) => {
        console.log(event.target.files[0]);
        setFile(event.target.files[0]);
        setFileName(event.target.value);
        setFileImage(URL.createObjectURL(event.target.files[0]));
        console.log(event.target.files[0])
        console.log(event.target.value)
        console.log(URL.createObjectURL(event.target.files[0]))
    }

    const onNameHandler = (event) => {
        setProduct_name(event.currentTarget.value)
    }

    const onDescHandler = (event) => {
        setProduct_desc(event.currentTarget.value)
    }

    const onPriceHandler = (event) => {
        setProduct_price(event.currentTarget.value)
    }

    const productUpload = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("image", file);
        formData.append("product_name", product_name);
        formData.append("product_desc", product_desc);
        formData.append("product_price", product_price);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        axios.post('/api/users/productUpload', formData, config)
        .then(response => {
            console.log(response);
            navigate('/computershop');
        })
    }

    return (
        <>
        <Header />
        
        <div className="home_containerLine" />       
        <div className="productUpload">           
            <form onSubmit={productUpload} className="productBox">
                <div className="title">????????????</div>
                <button type="submit" className="upload">??????</button>
                <input className="input" type="text" value={product_name} onChange={onNameHandler} 
                placeholder="?????? ????????? ??????????????????" />                
                <textarea placeholder="?????? ????????? ??????????????????" style={{width: "100%", height: "400px", marginLeft: "0", 
                marginTop: "8px"}} value={product_desc} onChange={onDescHandler} />        
                <input className="input" type="text" placeholder="?????? ????????? ??????????????????" 
                value={product_price} onChange={onPriceHandler} />
                <label style={{marginBottom:"10px"}}>?????????</label>
                <input type="file" onChange={fileUploadHandler} />
                <div style={{marginTop:"10px"}}>{fileImage && (
                    <img src={fileImage} style={{width: "200px"}} />
                )}</div>
                
            </form>  
        </div>
        </>
    );
}

export default ProductUpload