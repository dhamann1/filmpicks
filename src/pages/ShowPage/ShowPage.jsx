import React from 'react';
import './ShowPage.css';
import Movie from '../../components/Movie/Movie';


const ShowPage = (props) => {
    return (
        <div> 
            <h1> this is the movie show page </h1> 
            <Movie movie={props.match.params.id}/> 
        </div> 
    ) 
}

export default ShowPage; 