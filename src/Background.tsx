
import { useEffect, useState } from 'react'
import './Background.css'

function Background() {
    const [activeTab, setActiveTab] = useState<'spotify' | 'youtube'>('spotify')

    useEffect(() => {
        const root = document.getElementById('root')
        if (!root) return

        root.style.setProperty('--root-width', '600px')
        root.style.setProperty('--root-height', '900px')
    }, [])


   

   
    return(
        <div className='cream_rectangle'>
            <div className='image_layer'>
                <img
                    src="/icons/imresizer-smiski-hippers_secret-figure_600x (6).png"
                    alt="smiski with headphones"
                    className='background_image'
                />
                <div className='tabs_row'>
                    <button
                        className={`tab_button ${activeTab === 'spotify' ? 'tab_button_active' : ''}`}
                        type='button'
                        onClick={() => setActiveTab('spotify')}
                        aria-pressed={activeTab === 'spotify'}
                    >
                        Spotify
                    </button>
                    <button
                        className={`tab_button ${activeTab === 'youtube' ? 'tab_button_active' : ''}`}
                        type='button'
                        onClick={() => setActiveTab('youtube')}
                        aria-pressed={activeTab === 'youtube'}
                    >
                        Youtube
                    </button>
                </div>
            </div>
            <div className='black_box'></div>


        


        </div>
        
    )
  
}

export default Background