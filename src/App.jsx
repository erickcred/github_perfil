import { useState } from 'react';
import Perfil from './components/Perfil';
import Formulario from './components/Formulario';
import ReposList from './components/ReposList';

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <div>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Infrome o nome do usuario" />


      {nomeUsuario.length > 1 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* <button type="button" onClick={ () => setFormularioEstaVisivel(!formularioEstaVisivel) }>toggle form</button>
      {formularioEstaVisivel && (
        <Formulario />
      )} */}

    </div>
  );
}

export default App;
