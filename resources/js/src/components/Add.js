import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
import swal from 'sweetalert';

const Add = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onAddSubmit = async () => {
    setLoading(true);
    try{
      await api.addPost({
        title, description
      }).then(res => {
        const result_controller = res.data;
        console.log('Controller response', result_controller);
      })
    }catch(err){
      console.log(err);
      console.log("Failed to add Post.")
    }finally{

      swal({
        title: "Status: 200",
        text: "You have successfully added new Post!",
        icon: "success",
        timer: 2000,
        button: false
      })

      setLoading(false);
      history.push('/');
    }
  };

  return (
   <AppContainer
    title="ADD POST"
   >
    <form>
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea 
          className="form-control" 
          cols="30"
          rows="10"
          value={description}
          onChange={e => setDescription(e.target.value)}
        >
        </textarea>
      </div>

      <div className="form-group">
        <button 
          type="button"
          className="btn btn-success"
          onClick={onAddSubmit}
          disabled={loading}
        >
          {loading ? 'LOADING...' : 'ADD'}
        </button>
      </div>
    </form>
   </AppContainer>
  );
};

export default Add;