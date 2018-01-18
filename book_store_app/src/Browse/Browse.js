import React, {Component} from 'react';
import SubHeader from '../SubHeader/SubHeader';

import books from '../data/books.json';
import Book from '../DivaiKnygomsAtvaizduot/DivKnyga1/DivKnyga1';

import Gridas from '../Grids/GridBrowseBooks/GridBrowseBooks';
import SubheaderBottom from '../SubHeader/SubheaderBottom/SubheaderBottom';



const createBook = (x) => <Book img={x.img} title={x.title} author={x.author} rating={x.rating}/>;
const free =  books.filter(el => el.price===0); 
const popular = books.filter(el => el.rating===5);
const lastest = books.slice(books.length-5, books.length);


const allBooks = books.map(createBook);
const freeBooks = free.map(createBook);
const popularBooks = popular.map(createBook);
const newestBooks = lastest.map(createBook);


const Browse = ( props ) => {
    return (
        <div>
            <SubHeader name ="Browse" />
            <SubheaderBottom />
            <Gridas elementai={freeBooks}/>
        </div>
    )
};

export default Browse;
