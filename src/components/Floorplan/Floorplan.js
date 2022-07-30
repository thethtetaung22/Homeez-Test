import React from 'react';
import './Floorplan.css';
import { Text, Line, Path, Group } from 'react-konva';
import floorPlans from '../../assets/json/floorplan-sample.json';

const FloorPlan = () => {

    const details = [
        {
            id: 'living-room',
            color: '#000000',
            strokeWidth: 20
        },
        {
            id: 'bed-room',
            color: '#000000',
            strokeWidth: 20
        },
        {
            id: 'bath/WC',
            color: '#000000',
            strokeWidth: 20
        },
        {
            id: 'aircon-ledge',
            color: '#000000',
            strokeWidth: 20
        },
        {
            id: 'household-shelter',
            color: '#000000',
            strokeWidth: 20
        },
        {
            id: 'kitchen',
            color: '#000000',
            strokeWidth: 20
        },
        {
            id: 'random-dome',
            color: '#000000',
            strokeWidth: 20
        },
        {
            id: 'unhackable-corner',
            color: '#6800FF',
            strokeWidth: 10
        },
        {
            id: 'shelter-wall',
            color: '#09E79D',
            strokeWidth: 10
        },
        {
            id: 'unhackable-wall',
            color: '#838383',
            strokeWidth: 10
        },
        {
            id: 'external-wall',
            color: '#FF00A2',
            strokeWidth: 10
        },
        {
            id: 'external-wall-windows',
            color: '#00F3FF',
            strokeWidth: 10
        },
        {
            id: 'hackable-wall',
            color: '#1BFF00',
            strokeWidth: 7,

        }
    ];

    const getStructuredPolygon = (plan) => {
        const points = plan.points.split(' ').join(',').split(',');
        const numArr = points?.map(p => Number(p));
        const detail = details.find(u => u.id === plan.id);

        return (<>
            <Line
                key={Math.random() / 3 * 96}
                stroke={detail?.color || '#000000'}
                strokeWidth={detail?.strokeWidth || 10}
                points={numArr}
            />
            <Text
                key={Math.random() / 3 * 9}
                text={plan.id.replace('-', ' \n')}
                fill='#000000'
                fontSize={20}
                fontFamily='Arial'
                wrap='wrap'
                x={numArr[0] + 15}
                y={numArr[1] + 15}
            />
        </>);
    }

    return (
        <Group>
            {
                floorPlans.layout?.map((plan) => {
                    if (plan.tag === 'path') {
                        return (
                            <Path
                                key={(Math.random() / 3 * 96).toString()}
                                stroke={details.find(u => u.id === plan.id)?.color || '#000000'}
                                strokeWidth={details.find(u => u.id === plan.id)?.strokeWidth || 10}
                                data={plan.d}

                            />
                        )
                    } else if (plan.tag === 'polygon') {
                        return (
                            getStructuredPolygon(plan)
                        )
                    }
                    return <></>
                })
            }
        </Group>
    )
}

export default FloorPlan;