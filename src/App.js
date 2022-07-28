import logo from './logo.svg';
import './App.css';
import { Layer, Stage } from 'react-konva';
import FloorPlan from './components/Floorplan/Floorplan';

function App() {
    return (
        <div className='App'>
            <div className='floor-plan'>
                <FloorPlan />
            </div>
        </div>
    );
}

export default App;
