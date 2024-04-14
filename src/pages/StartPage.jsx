import { useNavigate, Link } from "react-router-dom";
import warriorImage from "../assets/characters/warrior-01-128.png"




function StartPage() {
  localStorage.setItem('GameData', JSON.stringify({
    hero: {
      name: "Hara",
      life: 100,
      strength: 5,
      maxLife: 100,
      level: 1,
      experience: 0,
      mana: 50,
      maxMana: 50,
      gold: 10,
      magicPower: 3,
      lifePotion: 10,
      manaPotion: 10,
      weaponEquiped: 0,
    },
  }));
  const navigate = useNavigate;

  // localStorage.getItem('GameData');
  // let variavel = JSON.parse(localStorage.getItem('GameData'));

  function playButton() {}


  function navegar() {
    navigate("/battlepage");
  }


  return (
    <div className='game-bg'>
      <h1 className="game-title">Bem vindo ao jogo</h1>
      <div className="start-page-box">

      <img className="hero-img-start" src={warriorImage} alt="" />
      <Link to="/mainscreen"><button className="btn-new-game" >Novo Jogo</button></Link>
      </div>
    </div>
  )
}

export default StartPage