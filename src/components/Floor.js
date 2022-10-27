import { usePlane } from '@react-three/cannon';

const Floor = ({ rotation, color, ...props }) => {
  /*
  const [ref] = usePlane(() => ({
    type: 'Static',
    mass: 0,
    rotation,
    ...props,
  }));
  */

  return (
    <mesh receiveShadow rotation={rotation}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Floor;
