import Content from '../../components/Content/Content';
import OptionsPanel from '../../components/OptionsPanel/OptionsPanel';

import LightsaberScene from './../../webgl/scenes/LightSaberScene/LightSaberScene';

function Home() {
  return (
    <Content>
      <LightsaberScene/>
      <OptionsPanel />
    </Content>
  );
}

export default Home;
