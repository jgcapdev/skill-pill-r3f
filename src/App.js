import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';

import Floor from './components/Floor';
import Lights from './components/Lights';
import Cube from './components/Cube';
import Adam from './components/Adam';

function App() {
  return (
    <div>
      <Canvas shadows camera={{ position: [0, 3, 5], fov: 70 }}>
        <Lights />
        <Physics gravity={[0, -9.8, 0]}>
          <Cube wireframe position={[0, 1, 0]} args={[1, 1, 1]} color="red" />
          <Cube position={[-3, 1, 0]} args={[1, 1, 1]} color="yellow" />
          <Cube position={[3, 1, 0]} args={[1, 1, 1]} color="green" />

          <Adam position={[-5, 2, 0]} args={[0.01]} />

          <Floor rotation={[Math.PI / -2, 0, 0]} color={'#272936'} />
        </Physics>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
