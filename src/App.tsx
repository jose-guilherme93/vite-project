


import { Header, Main , ContainerLeft, ContainerRight} from './styles'

function App() {
  
  const menu = [
    'Início', 'Projetos', 'Nosso time', 'Fale conosco'
  ]
  const services = ['lorem','lorem','lorem','lorem','lorem',]
  return (
    
    <>
      <Header>
      <h2>Power Techs</h2>
      <nav>
        <ul>
          {menu.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>
      </nav>
      </Header>

      <Main>
        <ContainerLeft>
          <p>Lorem consectetur adipisicing </p>
          <h1>Lorem ipsum dolor sit amet, consectetur adipis</h1>
          <div className=''>
            <button>play</button>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, officiis <a href="/">link.</a></p>
          </div>
        </ContainerLeft>
        
        <ContainerRight>
          <ul>
            {services.map((label, index) => (
              <>
                
                <li key={index}>{label}</li>
              </>
            ))}
          </ul>
        </ContainerRight>

      </Main>
    </>
  )
}

export default App
