import React from 'react';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';

const DataView = ({films, deleteFilm}) => {
  return   films.map(film=>(
                <tr key={film.name}>
                <td>{film.name}</td>
                <td>{film.genre}</td>
                <td>{film.rating}</td>
                <td className='delete-btn' onClick={()=> deleteFilm(film.name)}>
                    <Icon icon={trash} className='trash-icon' />
                </td>
                </tr>
            ))
}

export default DataView;