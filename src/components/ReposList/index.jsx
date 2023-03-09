import { useState, useEffect } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setErro(false);

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);             
                    setRepos(resJson);
                }, 1500);
            })
            .catch(e => {
                setErro(true);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">

            {
                erro ? (
                    <h1>Ops! Node de usuário informado não está correto.</h1>
                ) : (
                    estaCarregando ? (
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
                    )
                )
            }
            {/* {estaCarregando ? (
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
                                <div className={styles.itemDate}>
                                    <b>Criado:</b> 
                                    <time>
                                        {new Date(repositorio.created_at).toLocaleString("pt-br", {timezone: "UTC"})}
                                    </time>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            )} */}
        </div>
    )
}

export default ReposList;

//// https://api.github.com/users/erickcred/repos