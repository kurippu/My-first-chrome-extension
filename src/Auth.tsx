
function Authorization() {
    const clientId = '2362f9350997455da7ff75afffb0e13b'
    const scope = 'user-read-private user-read-currently-playing playlist-modify-private playlist-modify-public user-library-modify'
    const redirectUri = `https://kaylin-stayable-nonspiritedly.ngrok-free.dev`
    const authUrl = 'https://accounts.spotify.com/authorize'

    const state = crypto.randomUUID()
    localStorage.setItem('spotify_oauth_state', state)

    const params = new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        scope,
        redirect_uri: redirectUri,
        state,
        show_dialog: 'true',
    })

    const authorizeUrl = `${authUrl}?${params.toString()}`

    const extensionChrome = (globalThis as typeof globalThis & {
        chrome?: { tabs?: { create?: (options: { url: string }) => void } }
    }).chrome

    if (extensionChrome?.tabs?.create) {
        extensionChrome.tabs.create({ url: authorizeUrl })
    } else {
        const opened = window.open(authorizeUrl, '_blank', 'noopener,noreferrer')
        if (!opened) {
            window.location.assign(authorizeUrl)
        }
    }

    return true

}


export default Authorization