import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
import swal from 'sweetalert';

const Edit = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const getOnePost = () => {
    api.getOnePost(id).then(res => {
      const result = res.data;
      const post = result.data;
      setTitle(post.title);
      setDescription(post.description);
    })
  }

  const onEditSubmit = async () => {
    setLoading(true);
    try{
      await api.updatePost({
        title, description
      }, id).then(res => {
        const result = res.data;
        console.log('Controller response', result);
      })
    }catch{
      console.log("Failed to update Post!")
    }finally{

      swal({
        title: "Status: 200",
        text: "You have successfully updated the Post!",
        icon: "success",
        timer: 2000,
        button: false
      })

      setLoading(false);
      history.push('/');
    }
  };

  useEffect(() => {
    getOnePost();
  }, [])

  return (
   <AppContainer
    title="EDIT POST"
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
          onClick={onEditSubmit}
          disabled={loading}
        >
          {loading ? 'LOADING...' : 'Update'}
        </button>
      </div>
    </form>
   </AppContainer>
  );
};

export default Edit;