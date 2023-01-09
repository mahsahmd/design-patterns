import Provider from "./provider/Provider";
import Form from "./proxy/Form";
import Singleton from "./Singletons/Singleton";
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Wrapper>

        <Singleton />
        <Form />
        <Provider />
      </Wrapper >

    </div>
  );
}
const Wrapper = styled.div`
  margin: 24px;
`
export default App;
