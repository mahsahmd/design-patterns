import Provider from "./provider/Provider";
import Form from "./proxy/Form";
import Singleton from "./Singletons/Singleton";
import styled from 'styled-components'
import Test from "./observer/Test";
import RenderProps from "./renderProps/RenderProps";
function App() {
  return (
    <div className="App">
      <Wrapper>

        <Singleton />
        <Form />
        <Provider />
        <Test />
        <RenderProps/>
      </Wrapper >

    </div>
  );
}
const Wrapper = styled.div`
  margin: 24px;
`
export default App;
