import { useSphere } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';

const Adam = ({ position, args, ...props }) => {
  const { nodes, materials } = useGLTF('/assets/adam.gltf');

  /*
  const [ref] = useSphere((index) => ({
    type: 'Dynamic',
    mass: 1,
    position,
    args,
    ...props,
  }));
  */

  return (
    <group {...props} position={position} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
      />
    </group>
  );
};

export default Adam;
