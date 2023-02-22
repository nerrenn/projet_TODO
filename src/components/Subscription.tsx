/**
 * Composant de l'écran de connexion
 */
export default function Subscription() {
    return(
        <>
            <h1>Connexion</h1>
            <div>
                <input type="email"></input>
                <i></i>
                <hr/>
            </div>
            <div>
                <input type="password"></input>
                <i></i>
                <hr/>
            </div>
            <button>Envoyer</button>
            <p>Vous n'avez pas de compte ? <br/> Inscrivez Vous</p>
        </>
    )
}