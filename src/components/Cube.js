import { useBox } from '@react-three/cannon';

const BaseBox = ({ position, args, color, wireframe = false, ...props }) => {
  /*
  const [ref] = useBox(() => ({
    type: 'Static',
    mass: 1,
    position,
    args,
    ...props,
  }));
  */

  return (
    <mesh castShadow position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
};

export default BaseBox;
