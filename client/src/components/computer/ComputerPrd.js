import React from 'react';
import './ComputerPrd.css';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ProductDelete from './ProductDelete';
import {Link} from 'react-router-dom';
function ComputerPrd(props) {

    return (
                         
        <TableRow >          
            <TableCell>{props.product_name}</TableCell>
            <TableCell>
                <Link to={`/productDetail/${props.id}`}>
                <img src={props.product_image} className="product_img"/>
                </Link>
            </TableCell>
            <TableCell>{props.product_desc.length < 20 ? props.product_desc : props.product_desc.slice(0, 20) + '...'}</TableCell>
            <TableCell>{props.product_price} <br/>
                        <button className='cart'>담기</button></TableCell>
        </TableRow>    
             
    );
}



export default ComputerPrd