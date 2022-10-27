import { useBox } from '@react-three/cannon';

const BaseBox = ({ position, args, color, wireframe = false, ...props }) => {
  /* Physics
  const [ref] = useBox(() => ({
    type: 'Static',
    mass: 1,
    position,
    args,
    ...props,
  }));
  */

  // Add ref={ref} to enable physics
  return (
    <mesh castShadow position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
};

export default BaseBox;
