import React from 'react';
import '../assets/styles/components/ButtonChangePage.scss';
import { connect } from 'react-redux';
import { nextPageTrends } from '../actions';
import { nextPageOriginals } from '../actions';

const  ButtonPrevious = (props) => {
     

    
    const handlePreviousPage = (numberPage,categoryButton) => {
        const number = 1;
        let num;
        
        numberPage > 1 ?
        num = numberPage - number
        :
        num = numberPage;

        if(categoryButton === "Trends"){
            props.nextPageTrends(
                num
            );
        }
        else if(categoryButton === "Originals"){
            props.nextPageOriginals(
                num
            );
        }
      
        
    }
    
    return(
        <>
        <button className="buttonChangePage" onClick={() => handlePreviousPage(props.page,props.categoryButton)} >{props.nameButton}</button>
        <span className='counterButton'>{props.page}</span>
        </>
    )

}


const mapDispatchToProps= {
    nextPageTrends,
    nextPageOriginals,
}

export default connect(null,mapDispatchToProps)(ButtonPrevious);