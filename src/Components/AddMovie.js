import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Form , FormGroup ,Input, Button } from "reactstrap";

 const AddMovie=({onAdd})=>{
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [rating,setRating]=useState('');
    const [posterURL,setPosterURL]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        onAdd(title ,description , rating, posterURL );
       
    
    };
    return (
        <div>
<Form onSubmit={handleSubmit}>
  <FormGroup>
   
    <Input
      
      name="title"
      placeholder="title"
      type="text"
      required
      onChange={e=>setTitle(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
  
    <Input
      
      name="description"
      placeholder="description "
      type="text"
      required
      onChange={e=>setDescription(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
   
    <Input
      
      name="rating"
      type="number"
      placeholder="rating "
      required
      onChange={e=>setRating(e.target.value)
      
      }
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
   
    <Input
      
      name="posterURL"
      placeholder="posterURL"
      type="text"
      required
      onChange={e=>setPosterURL(e.target.value)}
    />
  </FormGroup>
  
  
  
  <Button  type="submit"  >
  Add
  </Button>
</Form>
        </div>
    )
 }
 AddMovie.propTypes={
   onAdd: PropTypes.func,
 }
 export default AddMovie;