import warriorImage from "../../assets/characters/warrior-01-128.png"
import { Link } from "react-router-dom";

function BattleScreen(props) {
  let variavel = JSON.parse(localStorage.getItem('GameData'))
  return (
    <div className='battle-screen'>
      <div className='status-box'>
        <div>
          <p>Nome: {variavel.hero.name}</p>
          <p>vida: {variavel.hero.life}</p>
          <p>Level: {variavel.hero.level}</p>
        </div>
        <div>
          <p>Gold: {variavel.hero.gold}</p>
          <p>Pocoes de vida: {variavel.hero.lifePotion}</p>
          <p>Pocoes de mana: {variavel.hero.manaPotion}</p>
        </div>
        <div>
          <p>Mana: {variavel.hero.mana}</p>
          <p>Forca: {variavel.hero.strength}</p>
          <p>Poder Magico: {variavel.hero.magicPower}</p>
        </div>
      </div>

      <div className='message-box'><h2 className='fight-message'>{props.message}</h2></div>

        <div className='fight-box'>
          <div className='hero-box'>
            <p className="battle-name">{props.heroProp.name}</p>
          <p className="life-count">{props.heroProp.life}</p>
            <div className='hero-life-bar'>
              <div className='hero-health' style={{width: `${100/props.heroProp.maxLife * props.heroProp.life}%`}}></div>
            </div>
            <div className='hero-mana-bar'>
              <div className='hero-mana' style={{width: `${100/props.heroProp.maxMana * props.heroProp.mana}%`}}></div>
            </div>
            <img className='hero-image' src={warriorImage} alt="" />
          </div>            
          <div className='monster-box'>
          <p className="battle-name">{props.monsterName}</p>
            <p className="life-count">{props.monsterLife}</p>
          <div className='monster-life-bar'>
            <div className='monster-health' style={{width: `${props.monsterHBar}%`}}></div>
          </div>
            <img className='monster-image' src={props.monsterImage} alt="" />
          </div>
        </div>

        <div className='bottom-box'>
          <button disabled={props.dibledBtn} onClick={props.meleeAtackHero} className='attackButton'>Melee Atack</button>
          <button disabled={props.dibledBtn} onClick={props.specialAtackHero} className='attackButton'>Special Atack</button>
          <button><Link to="/mainscreen">Voltar</Link></button>       
        </div>
        <p className={`hero-hit-n ${props.heroHit}`}>{props.Hatack}</p>
        <p className={`monster-hit-n ${props.monsterHit}`}>{props.Matack}</p>
    </div>
  )
}

export default BattleScreen;