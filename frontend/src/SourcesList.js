import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const SourcesList = () => {
  const [sources, setSources] = useState([]);
  // const [updatedSource, setUpdatedSource] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [updatedSource, setUpdatedSource] = useState({});

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

  // const handleUpdateSource = async (id, updatedSource) => {
  //   try {
  //     const response = await axios.put(`http://localhost:5000/api/sources/${id}/`, updatedSource);
  //     setSources(sources.map(source => source.id === id ? response.data : source));
  //   } catch (error) {
  //     console.error(`Error updating source with ID ${id}:`, error);
  //   }
  // };
  // const handleUpdateSource = async (id, updatedSource) => {
  //   // Check that all fields are filled in
  //   if (!updatedSource.name || !updatedSource.organization || !updatedSource.email || !updatedSource.phone || !updatedSource.notes) {
  //     alert('Please fill in all fields');
  //     return;
  //   }
  
  //   try {
  //     await axios.put(`http://localhost:5000/api/sources/${id}/`, updatedSource);
  //     // Refetch sources
  //     const response = await axios.get('http://localhost:5000/api/sources/');
  //     setSources(response.data);
  //     // Reset editingId and updatedSource
  //     setEditingId(null);
  //     setUpdatedSource({});
  //   } catch (error) {
  //     console.error(`Error updating source with ID ${id}:`, error);
  //   }
  // };
  const handleUpdateSource = async (id, updatedSource) => {
    // Check that all fields are filled in
    if (!updatedSource.name || !updatedSource.organization || !updatedSource.email || !updatedSource.phone || !updatedSource.notes) {
      alert('Please fill in all fields');
      return;
    }
  
    try {
      await axios.put(`http://localhost:5000/api/sources/${id}/`, updatedSource);
      // Refetch sources
      // await axios.get('http://localhost:5000/api/sources/${id}/');
      // setSources(response.data);
      window.location.reload();
      // Reset editingId and updatedSource
      setEditingId(null);
      setUpdatedSource({});
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
              {editingId === source.id ? (
                <>
                  <TableCell>
                    <input value={updatedSource.name || ''} onChange={e => setUpdatedSource({ ...updatedSource, name: e.target.value })} />
                  </TableCell>
                  <TableCell>
                    <input value={updatedSource.organization || ''} onChange={e => setUpdatedSource({ ...updatedSource, organization: e.target.value })} />
                  </TableCell>
                  <TableCell>
                    <input value={updatedSource.email || ''} onChange={e => setUpdatedSource({ ...updatedSource, email: e.target.value })} />
                  </TableCell>
                  <TableCell>
                    <input value={updatedSource.phone || ''} onChange={e => setUpdatedSource({ ...updatedSource, phone: e.target.value })} />
                  </TableCell>
                  <TableCell>
                    <input value={updatedSource.notes || ''} onChange={e => setUpdatedSource({ ...updatedSource, notes: e.target.value })} />
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell>{source.name}</TableCell>
                  <TableCell>{source.organization}</TableCell>
                  <TableCell>{source.email}</TableCell>
                  <TableCell>{source.phone}</TableCell>
                  <TableCell>{source.notes}</TableCell>
                </>
              )}
              <TableCell>
                {editingId === source.id ? (
                  <Button variant="contained" color="primary" onClick={() => handleUpdateSource(source.id, updatedSource)}>
                    Save
                  </Button>
                ) : (
                  <Button variant="contained" color="primary" onClick={() => setEditingId(source.id)}>
                      Update
                    </Button>
                  )}
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

