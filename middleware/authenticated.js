export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.app.authenticated) {
        return redirect('/sign-in')
    }
}