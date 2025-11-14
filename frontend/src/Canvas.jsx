import { Canvas as R3fCanvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { HomeTunnel, ProjectsTunnel } from '../../threeTunnel';

const Canvas = () => {
    return (
        <R3fCanvas
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                width: '100vw',
                pointerEvents: 'none'
            }}>
            <Suspense fallback={null}>
                <ProjectsTunnel.Out />
                <HomeTunnel.Out />
            </Suspense>
        </R3fCanvas>
    );
};

export default Canvas;
