import React from 'react';
import './css/app.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl' 
import Main from './components/main'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
    <Layout>
        <Header className='header-color' title="Menu">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/receitas">Receitas</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/receitas">Receitas</Link>
            </Navigation>
        </Drawer>
        <Content>
          <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
