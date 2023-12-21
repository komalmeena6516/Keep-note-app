import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react';
import { styled } from '@mui/material/styles';
import { DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';


const Note2 = ({ id, title, content, color, onDelete, onEdit, onColorChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  // const [showColorPicker, setShowColorPicker] = useState(false);

  const handleEdit = () => {
    onEdit(id, editedTitle, editedContent);
    setIsEditing(false);
  };

  // const handleColorChange = (e) => {
  //   onColorChange(id, e.target.value);
  // };

  return (
    <Card style={{ background: `${color}`, padding: '10px' }}>
        {isEditing ?
          (
            <>
              <CardContent>
              <input style={{fontSize: '16px', display:'block', border:'none', marginBottom: '10px', padding: '5px', width: '220px'}}
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea cols='30' style={{display:'block', border:'none'}}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
              </CardContent>
              <CardActions>
                <Button onClick={handleEdit}>Save</Button>
              </CardActions>
            </>


          ) : (
            <>
              <CardContent>
                <Typography variant='h6' >{title}</Typography>
                <Typography variant='p'>{content}</Typography>
              </CardContent>
              <CardActions>
                <EditIcon style={{ marginLeft: 'auto' }}  fontSize="small" onClick={() => setIsEditing(true)} />
                <Delete
                  fontSize="small"
                  onClick={() => onDelete(id)}
                />

              </CardActions>
            </>

          )
        }

    </Card >
  )
};

Note2.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default Note2