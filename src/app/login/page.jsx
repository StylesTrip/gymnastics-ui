import { login, signup } from './actions';

export default function LoginPage() {
    return (
        <form>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" />
            <button formAction={login}>Log in</button>
        </form>
    );
}
