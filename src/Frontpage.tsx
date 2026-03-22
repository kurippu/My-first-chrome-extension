import { useEffect } from 'react'
import "./Background.css"
import Authorization from './Auth'

function FrontPage() {
	useEffect(() => {
		const root = document.getElementById('root')
		if (!root) return

		root.style.setProperty('--root-width', '560px')
		root.style.setProperty('--root-height', '560px')
	}, [])

	const handleLoginClick = () => {
		Authorization()
	}

	return (
		<div className='frontpage_layout'>
			<div className='frontpage_overlay'>
				<h1 className='frontpage_title'>Welcome!!!</h1>
				<p className='frontpage_subtitle'>Login to continue your music journey.</p>
			</div>
			<button className='frontpage_login_button' type='button' onClick={handleLoginClick}>
				Login with Spotify
			</button>
		</div>
		
	)
}

export default FrontPage