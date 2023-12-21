import React from 'react'
import { useState } from 'react';
import { Box, TextField, Select, Button, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';


const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom:20px;
    margin-top:30px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    border-color: #e0e0e0;
    max-width: 600px;
    border-radius: 8px;
    min-height: 30px;
    padding: 10px 15px;

    
`
// const ColorPicker = styled(Select)`
// margin-top: 5px;
// `
const ColorPickerButton = styled(Button)`
margin-top:10px;
cursor:pointer;
padding: 5px;
background: white;

`
const NoteAction = styled(Box)`
display: flex;
gap: 10px;

`

const NoteCreate = ({ onCreate }) => {

    // const [showTextField, setShowTextField] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [color, setColor] = useState('#ffffff');
    const [showColorPicker, setShowColorPicker] = useState(false);


    //-----------------------


    const handleCreate = () => {
        if (title.trim() !== '' || content.trim() !== '') {
            onCreate(title, content, color);
            setTitle('');
            setContent('');
            setColor('#ffffff');
            setShowColorPicker(false);
        }
    };


    return (

        <Container>

            <TextField
                placeholder="Title"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                style={{ marginBottom: 10 }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
                placeholder="Take a note..."
                multiline
                maxRows={Infinity}
                variant="standard"
                InputProps={{ disableUnderline: true }}
                value={content}
                onChange={(e) => setContent(e.target.value)}

            />


            <NoteAction>
            <Button style={{ marginLeft: 'auto' }} size="small" onClick={handleCreate}>
            Create Note
        </Button>

            <ColorPickerButton onClick={() => setShowColorPicker(!showColorPicker)}>
            <Tooltip title='Select Color' placement="top">
                <div><ColorLensOutlinedIcon /></div>
                </Tooltip>
                
            </ColorPickerButton>

            {showColorPicker && (
                <Select value={color} onChange={(e) => setColor(e.target.value)} size='small' width='50px'>
                    <MenuItem value="#ee382eb2">Red</MenuItem>
                    <MenuItem value="#f05db3">Pink</MenuItem>
                    <MenuItem value="#67ec7965">Green</MenuItem>
                    <MenuItem value="#3d59e365">skyblue</MenuItem>
                    <MenuItem value="#ffff00">Yellow</MenuItem>
                    <MenuItem value="#ff00ff">Magenta</MenuItem>
                    <MenuItem value="#926ff3">Purple</MenuItem>
                    <MenuItem value="#ed9e36">Orange</MenuItem>
                    {/* Add more colors as needed */}
                </Select>
            )}
        </NoteAction>
        </Container >

    )
}

export default NoteCreate