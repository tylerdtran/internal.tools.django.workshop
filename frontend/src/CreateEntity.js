// src/components/CreateEntity.js
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';

const CreateEntity = ({ entityName, fields, onEntityCreated }) => {
  const initialState = Object.fromEntries(fields.map(field => [field, '']));
  const [newEntity, setNewEntity] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntity({ ...newEntity, [name]: value });
  };

  const handleCreateEntity = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/api/sources`, newEntity);
      onEntityCreated(response.data);
      setNewEntity(initialState);
    } catch (error) {
      console.error(`Error creating ${entityName}:`, error);
    }
  };

  return (
   <Box display="flex" flexDirection="column" alignItems="center">
      <h2>Create New {entityName}</h2>
      {fields.map((field) => (
        <TextField
          key={field}
          label={field.charAt(0).toUpperCase() + field.slice(1)}
          name={field}
          value={newEntity[field]}
          onChange={handleInputChange}
          margin="normal"
        />
      ))}
      <Button variant="contained" color="primary" onClick={handleCreateEntity} style={{ marginTop: '16px' }}>
        Create {entityName}
      </Button>
    </Box>
  );
};

export default CreateEntity;
