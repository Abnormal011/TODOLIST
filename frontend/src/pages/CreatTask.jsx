/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatTask = () => {

  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [status, setStatus]= useState('');
  const [loading, setLoading]= useState(false);
  const navigate = useNavigate();
  const handleSaveTask = () => {
    const data = {
      title,
      description,
      status
    };
    setLoading(true);
    axios
    .post('http://localhost:5555/tasks/', data)
    .then(() => {
      setLoading(false);
      navigate('/');
    })
    .catch((err) => {
      setLoading(false);
      alert('an error happend. plaese chack console')
      console.log(err);
    })
  }

  return (
    <div className='p-4'>
      <BackButton/>
    </div>
  )
}

export default CreatTask