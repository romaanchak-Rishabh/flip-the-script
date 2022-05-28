import React, { useEffect, useState } from 'react';
import "./Protected.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Auth from '../../Auth';
import DataView from '../DataView';


const Protected = ({deleteAll, persistTodo}) => {
    const logout = () => {
      Auth.signout();
    }

    // getting values form local storage
    const getDatafromLS=()=>{
      const data=localStorage.getItem('films');
      if(data) {
        return JSON.parse(data);
      }
      else {
        return [];
      }
    }

    const [films, setfilms] = useState(getDatafromLS());

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');

    const handleAddFilmSubmit = (e) => {
      e.preventDefault();

      if(validateName(name)) {
        if(validateGenre(genre)) {
          if(validateRating(rating)) {
            let film={
              name,
              genre,
              rating
            }
            setfilms([...films, film]);
            setGenre('');
            setName('');
            setRating('');
          }
        }
      }
    }

    const validateName = (values) => {
      if (values=='') {
        alert("Fill column");
        return false;
      }
      return true;
    };

    const validateGenre = (values) => {
      if (values=='') {
        alert("Fill Column");
        return false;
      }
      return true;
    };

    const validateRating = (values) => {
      if (values=='') {
        alert("Fill column");
        return false;
      }
      return true;
    };

    // saving data to local storage
    useEffect(() => {
      localStorage.setItem('films', JSON.stringify(films));
    }, [films])

    // delete film from LS
    const deleteFilm = (name) => {
      const filteredFilms=films.filter((element, index) => {
        return element.name!=name;
      })
      setfilms(filteredFilms);
    }
  
  return (
    <div className='protected'>
      <div className='logged-head'>
        <h1 className='home-heading logged'>User Management System</h1>
        <button onClick={logout}><Link to='/' className='logout-button link'>Logout</Link></button>
      </div>
      <div className='logged-username'>
        <p>Hey XYZ!</p>
      </div>
      <div className='watchlist-heading'>
        <h3>Your Watchlist</h3>
      </div>
      <div className='main'>
        <div className='view-container'>
          <div className='table-responsive'>
            <table className='table'>
              <thead className='thead'>
                <tr>
                  <th>Name</th>
                  <th>Genre</th>
                  <th>Rating</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {films.length<1 && <div>No data to show</div>}
                {films.length>0 && <DataView films={films} deleteFilm={deleteFilm} />}
              </tbody>
            </table>
          </div>
        </div>
        <div className='form-main'>
          <div className='watchlist-add-heading'>
            <h3>Add to your Watchlist</h3>
          </div>
          <form autoComplete='off' className='form-group'>
            {/* <label>Name</label> */}
            <input type="text" className='form-input' required onChange={(e)=> setName(e.target.value)} value={name} placeholder='Enter Name' ></input>
            <br />
            {/* <label>Genre</label> */}
            <input type="text" className='form-input' required onChange={(e)=> setGenre(e.target.value)} value={genre} placeholder='Enter Genre' ></input>
            <br />
            {/* <label>Rating</label> */}
            <input type="number" className='form-input' required onChange={(e)=> setRating(e.target.value)} value={rating} placeholder='Enter Rating' ></input>
            <br />
            <button type='submit' onClick={handleAddFilmSubmit} className='btn-add'>ADD DATA</button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

// const mapDispatchToProps = dispatch => ({
//   deleteAll: () => dispatch(deleteAll()),
//   persistTodo: () => dispatch(persistTodo())
// })
export default Protected;