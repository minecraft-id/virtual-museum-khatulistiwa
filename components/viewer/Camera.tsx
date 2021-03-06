import { ViewerValues } from '@/hooks/ViewerContext';
import { createRef } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

interface IProps {
  data: ViewerValues;
}

const Camera = ({ data }: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cam = createRef<any>();

  return (
    <>
      <PerspectiveCamera makeDefault ref={cam} {...data.cameraConfig} />
      <OrbitControls
        camera={cam.current}
        enabled={!data.disableControl}
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
        {...data.orbitConfig}
      />
    </>
  );
};

export default Camera;
