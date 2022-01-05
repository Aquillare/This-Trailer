import React from 'react';
import '../assets/styles/components/ButtonChangePage.scss';
import { connect } from 'react-redux';
import { nextPageTrends } from '../actions';
import { nextPageOriginals } from '../actions';

const  ButtonNext = (props) => {
     

    
    const handleNextPage = (numberPage,categoryButton) => {
        const number = 1;
        let num = numberPage + number

        if(categoryButton === "Trends"){
            props.nextPageTrends(
                num
            )
        }
        else if(categoryButton === "Originals"){
            props.nextPageOriginals(
                num
            )
        }        

       
    }
    
    return(
        <>
        <button className="buttonChangePage"onClick={() => handleNextPage(props.page,props.categoryButton)} >{props.nameButton}</button>
        </>
    )

}


const mapDispatchToProps= {
    nextPageTrends,
    nextPageOriginals
}

export default connect(null,mapDispatchToProps)(ButtonNext);