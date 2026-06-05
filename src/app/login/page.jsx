import { login } from './actions';
import clsx from 'clsx';

export default async function LoginPage({ searchParams }) {
    const error = await searchParams.error;

    return (
        <main className="p-4 flex flex-col gap-4 h-screen items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center">
                <section className="p-4 bg-white rounded-2xl shadow w-full max-w-4xl flex flex-col gap-2">
                    {error && (
                        <div
                            role="alert"
                            className={clsx(
                                error &&
                                    'text-red-600 border border-red-500 p-1 rounded-md'
                            )}
                        >
                            {error}
                        </div>
                    )}
                    <h1 className="text-xl font-semibold self-center">
                        Sign in
                    </h1>
                    <form className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="font-semibold">
                                Email
                            </label>
                            <input
                                className="border border-black p-1 rounded focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                                id="email"
                                name="email"
                                type="email"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="font-semibold">
                                Password
                            </label>
                            <input
                                className="border border-black p-1 rounded focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                                id="password"
                                name="password"
                                type="password"
                            />
                        </div>
                        <button
                            formAction={login}
                            className="border-2 border-black px-2 py-1 rounded-md self-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        >
                            Log in
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}
