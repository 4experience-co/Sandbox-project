

import Content from '../components/content/Content';
import ExampleScene from '../components/scenes/ExampleScene';
import OptionsPanel from '../components/options-panel/OptionsPanel';
import CollapseComponent from '../components/collapse-component/CollapseComponent';
import Button from '../components/button/Button';


function Home() {
  return (
    <Content>
      <ExampleScene />
      <OptionsPanel />
    </Content>
  );
}

export default Home;
