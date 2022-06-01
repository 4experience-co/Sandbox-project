

import Content from '../components/content/Content';
import OptionsPanel from '../components/options-panel/OptionsPanel';
import LightSaberScene from './../components/scenes/light-saber-scene/LightSaberScene';


function Home() {
  return (
    <Content>
      <LightSaberScene />
      <OptionsPanel />
    </Content>
  );
}

export default Home;
