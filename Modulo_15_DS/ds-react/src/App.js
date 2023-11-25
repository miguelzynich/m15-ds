import './App.css';
import Button from './ds/button/button.js';
import Flex from './ds/flex/flex.js';
import Input from './ds/input/input.js';
import Select from './ds/select/select.js'

function App() {
  return (
    <div className="App">
        <Flex direction='column' align='flex-start' justify='center'>
          <Input direction='column' label='Nome' id='nome'/>
          <Input type='text' direction='column' label='Email' id='email'/>
          <Select direction='column' labelText='Gênero:'>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outro</option>
          </Select>
          <Button variation='primary' size='small'>Enviar</Button>
        </Flex>
    </div>
  );
}

export default App;