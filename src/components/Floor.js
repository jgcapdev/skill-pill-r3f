import { usePlane } from '@react-three/cannon';

const Floor = ({ rotation, color, ...props }) => {
  /* Physics
  const [ref] = usePlane(() => ({
    type: 'Static',
    mass: 0,
    rotation,
    ...props,
  }));
  */

  // Add ref={ref} to enable physics
  return (
    <mesh receiveShadow rotation={rotation}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Floor;
