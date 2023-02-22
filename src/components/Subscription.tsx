import { useStore } from "@nanostores/react"
import { changeEmail, changePassword, SubscribeStore } from "../stores/Subscription.store"

/**
 * Composant de l'écran de connexion
 */
export default function Subscription() {

    const {email, password, isPasswordValid, isEmailValid} = useStore(SubscribeStore)
    return(
        <>
            <h1>Inscription</h1>
            <div>
                <input type="email" value={email} onChange={changeEmail}></input>
                {isEmailValid === null ? null : isEmailValid ? (
                    <p>Valide</p>
                ) : (
                    <p>Non Valide</p>
                )}
            </div>
            <div>
                <input type="password" value={password} onChange={changePassword}></input>
                {isPasswordValid === null ? null : isPasswordValid ? (
                    <p>Valide</p>
                ) : (
                    <p>Non Valide</p>
                )}
            </div>
            <button>S'inscrire</button>
            <p>Vous n'avez pas de compte ? <br/> Inscrivez Vous</p>
        </>
    )
}