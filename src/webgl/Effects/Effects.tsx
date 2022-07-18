import { Bloom,EffectComposer } from '@react-three/postprocessing';

//<Effects /> component makes VR mode not work

const Effects: React.FC = () => {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0} luminanceSmoothing={1.5} height={300} />
    </EffectComposer>
  );
};

export default Effects;
