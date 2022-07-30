import React from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';
import FurnitureSvg from '../../assets/svgs/furniture-sample.svg';

const FurnitureImage = ({ isSelected }) => {
    const [image] = useImage(FurnitureSvg);
    const shapeRef = React.useRef();
    const trRef = React.useRef();

    React.useEffect(() => {
        if (isSelected) {
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <React.Fragment>
            <Image image={image} draggable ref={shapeRef}/>
            {
                isSelected && 
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        // limit resize
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            }
        </React.Fragment>
    )
}

export default FurnitureImage;