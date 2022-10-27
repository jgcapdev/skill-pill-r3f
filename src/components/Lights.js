const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} castShadow />
      <spotLight penumbra={0.5} position={[10, 10, 5]} castShadow />
    </>
  );
};

export default Lights;
