import { useState, useEffect } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);             
                    setRepos(resJson);
                }, 1500);
            });
    }, [nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {
                        repos.map(repositorio => (
                            <li key={repositorio.id} className={styles.listItem}>
                                <div className={styles.itemName}>
                                    <b>Nome:</b>{repositorio.name} 
                                </div>
                                <div className={styles.itemLanguage}>
                                    <b>Linguagem:</b>{repositorio.language}
                                </div>
                                <div>
                                    <a className={styles.itemLink} href={repositorio.html_url} target="_blank">Acessar repositório</a>
                                </div>
                                {/* <div className={styles.itemDate}>
                                    <b>Criado:</b> 
                                    <time>
                                        {new Date(repositorio.created_at).toLocaleString("pt-br", {timezone: "UTC"})}
                                    </time>
                                </div> */}
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}

export default ReposList;

//// https://api.github.com/users/erickcred/repos