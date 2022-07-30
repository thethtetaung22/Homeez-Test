// eslint-disable
import { Button } from '@mui/material';
import { useState } from 'react';
import { Layer, Stage } from 'react-konva';
import './App.css';
import FloorPlan from './components/Floorplan/Floorplan';
import FurnitureImage from './components/Furniture/Furniture';

const App = () => {
    const [loadImage, setLoadImage] = useState(false);
    const [isSelected, setSelected] = useState(false);

    const onLoadFurniture = () => {
        setLoadImage(true);
    };

    return (
        <div className='App'>
            <div className='stage-container'>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <FloorPlan />
                        { loadImage && <FurnitureImage isSelected={isSelected}/> }
                    </Layer>
                </Stage>
            </div>
            <Button variant="contained" onClick={onLoadFurniture}>Load Furniture</Button>
            <Button variant="contained" style={{ marginTop: '10px'}} onClick={() => setSelected(!isSelected)}>{ isSelected ? 'Finish Transform': 'Transform Furniture'}</Button>
        </div>
    );
}

export default App;
