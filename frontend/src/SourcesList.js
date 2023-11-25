import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const SourcesList = () => {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/sources');
        setSources(response.data);
      } catch (error) {
        console.error('Error fetching sources:', error);
      }
    };

    fetchSources();
  }, []);

  
  const handleDeleteSource = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/sources/${id}`);
      // setSources(sources.filter(source => source.id !== id));
      setSources(prevSources => prevSources.filter(source => source.id !== id));
    } catch (error) {
      console.error(`Error deleting source with ID ${id}:`, error);
    }
  }; 

  const handleUpdateSource = async (id, newName) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/sources/${id}`, { name: newName });
      setSources(sources.map(source => source.id === id ? response.data : source));
    } catch (error) {
      console.error(`Error updating source with ID ${id}:`, error);
    }
  };

  return (
    <div>
      <h2>Sources List</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Organization</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sources.map((source) => (
              <TableRow key={source.id}>
                <TableCell>{source.name}</TableCell>
                <TableCell>{source.organization}</TableCell>
                <TableCell>{source.email}</TableCell>
                <TableCell>{source.phone}</TableCell>
                <TableCell>{source.notes}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleUpdateSource(source.id, 'New Name')}>
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteSource(source.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SourcesList;