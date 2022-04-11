import React from 'react';
import LoginButton from './LoginButton';
import Profile from './Profile';
import TeamBuilder from './TeamBuilder';
import { useAuth0 } from '@auth0/auth0-react';

function show() {
    const teamBuilderX = document.getElementById('teamBuilder');
    if (teamBuilderX.style.display == 'none') {
        teamBuilderX.style.display = 'block';
    } else {
        teamBuilderX.style.display = 'none';
    }
}

const Blaine = () => {
    const { isAuthenticated } = useAuth0()
    return (
        <div className='brock'>
            <div className='brock-info'>
                <h2>Leader Blaine</h2>
                <p>Blaine</p>
                <img src='https://www.serebii.net/pokearth//trainers/frlg/36.png' className='brock-img' />
                <div className='team'>
                    <img src='https://www.serebii.net/pokearth//sprites/frlg/058.png'/>
                    <img src='https://www.serebii.net/pokearth//sprites/frlg/077.png'/>
                    <img src='https://www.serebii.net/pokearth//sprites/frlg/078.png'/>
                    <img src='https://www.serebii.net/pokearth//sprites/frlg/059.png'/>
                    <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-glyph-black/2048/8313_-_Pokeball-512.png'/>
                    <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-glyph-black/2048/8313_-_Pokeball-512.png'/>
                </div>
            </div>
            <div className='feed-x'>
                <Profile />
                <LoginButton />
            </div>
                {isAuthenticated && (
                <div className='feed'>
                <button type='button' className='button-team' onClick={show}>Select a team</button>
                <form>
                    <textarea className='text-box' placeholder='Write a comment'/>
                    <input type={'submit'} className='submit'/>
                </form>
                <div className='teamBuilder' id='teamBuilder'>
                    <TeamBuilder />
                </div>
                </div>
                )}
                <div className='box'>
                    <div className='user'>
                        <img src='https://preview.redd.it/731q4046azz21.png?auto=webp&s=6a5a9793c565856c07e0bf854045b5db3ccaa324' className='user-picture' />
                        <h2 src='user-name'>Steven Stone</h2>
                        <p>@steven</p>
                    </div>
                    <div className='post'>
                        <div className='team'>
                            <img src='https://www.serebii.net/pokearth/sprites/frlg/001.png' className='team-pokemon'/>
                            <img src='https://www.serebii.net/pokearth/sprites/frlg/056.png' className='team-pokemon'/>
                            <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-glyph-black/2048/8313_-_Pokeball-512.png' className='team-pokemon'/>
                            <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-glyph-black/2048/8313_-_Pokeball-512.png' className='team-pokemon'/>
                            <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-glyph-black/2048/8313_-_Pokeball-512.png' className='team-pokemon'/>
                            <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-glyph-black/2048/8313_-_Pokeball-512.png' className='team-pokemon'/>
                        </div>
                        <div className='comment'>
                            <p>Bulbasaur is the best starter against Brock, you can win without problems if you use it. You have the option to catch a Monkay and use the Figth type for the victory!</p>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='user'>
                        <img src='https://images.alphacoders.com/998/thumb-1920-998446.jpg' className='user-picture' />
                        <h2 src='user-name'>Manuel Salcedo</h2>
                        <p>@manuel332</p>
                    </div>
                    <div className='post'>
                        <div className='team'>
                            <img src='https://www.serebii.net/pokearth/sprites/frlg/002.png' className='team-pokemon'/>
                            <img src='https://www.serebii.net/pokearth/sprites/frlg/025.png' className='team-pokemon'/>
                            <img src='https://www.serebii.net/pokearth/sprites/frlg/012.png'/>
                            <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-glyph-black/2048/8313_-_Pokeball-512.png' className='team-pokemon'/>
                            <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-glyph-black/2048/8313_-_Pokeball-512.png' className='team-pokemon'/>
                            <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-glyph-black/2048/8313_-_Pokeball-512.png' className='team-pokemon'/>
                        </div>
                        <div className='comment'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac augue at eros elementum ultricies. Quisque lorem nisl, gravida eget metus ut, congue pretium mi. Vivamus urna ligula, dignissim vitae purus sed, efficitur finibus leo. Morbi et erat euismod, commodo lacus eu, mattis magna. Nullam sit amet tortor sed risus feugiat placerat vel in urna. Quisque luctus, quam vel semper accumsan, dolor ex commodo ante, nec sodales magna turpis a neque.</p>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='user'>
                        <img src='https://www.pennlive.com/resizer/_bwobXn0wQvQAEWXlvyTWHTABB4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/N3CAVECZTZBTBMROEA5PL7VY7A.jpg' className='user-picture' />
                        <h2 src='user-name'>Digimon</h2>
                        <p>@digimonIsDaBest</p>
                    </div>
                    <div className='post'>
                        <div className='team'>
                            <img src='https://www.serebii.net/pokearth/sprites/frlg/010.png' className='team-pokemon'/>
                            <img src='https://www.serebii.net/pokearth/sprites/frlg/010.png' className='team-pokemon'/>
                            <img src='https://www.serebii.net/pokearth/sprites/frlg/010.png' className='team-pokemon'/>
                            <img src='https://www.serebii.net/pokearth/sprites/frlg/010.png' className='team-pokemon'/>
                            <img src='https://www.serebii.net/pokearth/sprites/frlg/010.png' className='team-pokemon'/>
                            <img src='https://www.serebii.net/pokearth/sprites/frlg/010.png' className='team-pokemon'/>
                        </div>
                        <div className='comment'>
                            <p>GG WP!</p>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='user'>
                        <img src='https://d1lss44hh2trtw.cloudfront.net/assets/article/2021/11/30/ace-attorney_feature.jpg' className='user-picture' />
                        <h2 src='user-name'>Steven Stone</h2>
                        <p>@steven</p>
                    </div>
                    <div className='post'>
                        <div className='team'>
                            <img src='https://www.serebii.net/pokearth/sprites/frlg/001.png' className='team-pokemon'/>
                            <img src='https://www.serebii.net/pokearth/sprites/frlg/056.png' className='team-pokemon'/>
                            <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-glyph-black/2048/8313_-_Pokeball-512.png' className='team-pokemon'/>
                            <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-glyph-black/2048/8313_-_Pokeball-512.png' className='team-pokemon'/>
                            <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-glyph-black/2048/8313_-_Pokeball-512.png' className='team-pokemon'/>
                            <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-glyph-black/2048/8313_-_Pokeball-512.png' className='team-pokemon'/>
                        </div>
                        <div className='comment'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac augue at eros elementum ultricies. Quisque lorem nisl, gravida eget metus ut, congue pretium mi. Vivamus urna ligula, dignissim vitae purus sed, efficitur finibus leo. Morbi et erat euismod, commodo lacus eu, mattis magna. Nullam sit amet tortor sed risus feugiat placerat vel in urna. Quisque luctus, quam vel semper accumsan, dolor ex commodo ante, nec sodales magna turpis a neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac augue at eros elementum ultricies. </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Blaine