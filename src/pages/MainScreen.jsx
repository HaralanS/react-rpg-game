import goblinImage from "../assets/characters/goblin-01.png"
import warriorImage from "../assets/characters/warrior-01-128.png"
import shopSeller from "../assets/characters/shop-seller-01-128.png"
import lifePotionImg from "../assets/items/life-potion-01.png"
import manaPotionImg from "../assets/items/mana-potion-01.png"
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import "../Shop01.css"
import "../Inventory.css"
import getItems from '../lists/items';

let itemList = getItems();
const experiencePerLevel = [0, 100, 220, 365, 540]
// heroData.weaponEquiped;
// itemList[weaponIndice].

// location.reload()
function MainScreen() {
  localStorage.getItem('GameData');
  let variavel = JSON.parse(localStorage.getItem('GameData'))
  const [lpCount, setLpCount] = useState(variavel.hero.lifePotion)
  const [mpCount, setMpCount] = useState(variavel.hero.manaPotion)
  const [storeModal, setStoreModal] = useState(false);
  const [inventoryModal, setInventoryModal] = useState(false);
  const [sellerMessage, setSellerMessage] = useState("O que deseja comprar hoje aventureiro?")
  const [inventoryItemDesc, setInventoryItemDesc] = useState({
    name: "",
    description: "",
    attack: "",
    precision: "",
    spcAttackName: "",
    spcAttackDesc: ""
  })
  const [data, setData] = useState(JSON.parse(localStorage.getItem('GameData')));
  const toggleStoreModal = () => {
    setStoreModal(!storeModal);
  }
  const toggleInventoryModal = () => {
    console.log(variavel.hero.weaponEquiped)
    setInventoryModal(!inventoryModal);
  }

  useEffect(() => {
    localStorage.setItem('GameData', JSON.stringify(data));
    
  }, [data])

  // let storeElement = document.getElementById("store-modal-id");
  if(storeModal || inventoryModal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.add('active-modal')
  }

  function drinkLifePotion() {
    if(variavel.hero.lifePotion > 0) {
      variavel.hero.life =( variavel.hero.maxLife - variavel.hero.life) > 50 ? variavel.hero.life + 50 : variavel.hero.maxLife;
      variavel.hero.lifePotion--;
      setLpCount(variavel.hero.lifePotion)
      localStorage.setItem('GameData', JSON.stringify(variavel));
    } else {
      console.log("cabou")
    }
  }
  function drinkManaPotion() {
    if(variavel.hero.manaPotion > 0) {
      variavel.hero.mana =( variavel.hero.maxMana - variavel.hero.mana) > 50 ? variavel.hero.mana + 50 : variavel.hero.maxMana;
      variavel.hero.manaPotion--;
      // setLpCount(variavel.hero.lifePotion)
      setMpCount(variavel.hero.manaPotion)
      localStorage.setItem('GameData', JSON.stringify(variavel));
    } else {
      console.log("cabou")
    }
  }

  function buyLifePotion(quant) {
    if(variavel.hero.gold >= 10) {
      variavel.hero.lifePotion += quant;
      variavel.hero.gold -= quant * 10;
      setLpCount(variavel.hero.lifePotion);
      localStorage.setItem('GameData', JSON.stringify(variavel));
      setSellerMessage(`Voce comprou ${quant} pocoes de vida por ${quant * 10} gold`)
      setData(JSON.parse(localStorage.getItem('GameData')))
    } else {
      setSellerMessage(`Voce nao tem gold suficiente! Fiado so amanha :D`)
      
    }
  }
  function buyManaPotion(quant) {
    if(variavel.hero.gold >= 10) {
      variavel.hero.manaPotion += quant;
      variavel.hero.gold -= quant * 10;
      // setLpCount(variavel.hero.lifePotion);
      localStorage.setItem('GameData', JSON.stringify(variavel));
      setSellerMessage(`Voce comprou ${quant} pocoes de mana por ${quant * 10} gold`)
      setData(JSON.parse(localStorage.getItem('GameData')))
    } else {
      setSellerMessage(`Voce nao tem gold suficiente! Fiado so amanha :D`)
      
    }
  }

  function showDescription(item) {
    setInventoryItemDesc({
      name: item.name,
      description: item.description,
      attack: item.damage,
      precision: item.precision,
      spcAttackName: item.specialAttackName,
      spcAttackDesc: item.specialAttackDescription
    })
  }

  // location.reload()

  return (
    <div className='game-bg'>
    <h1 className="game-title">RPG GAME</h1>
      {/* <img src={goblinImage} alt="" /> */}
      
      <div className='screen'>

        <div className="main-screen">
        <div className="main-bottom-box">
          <div>
            <p>Nome: {variavel.hero.name}</p>
            <p>Vida: {variavel.hero.life}/{variavel.hero.maxLife}</p>
            <p>Mana: {variavel.hero.mana}/{variavel.hero.maxMana}</p>
          </div>
          <div>
            <p>Gold: {variavel.hero.gold}</p>
            <p>Pocoes de vida: {lpCount}</p>
            <p>Pocoes de mana: {mpCount}</p>
          </div>
          <div>
            <p>Experiencia: {variavel.hero.experience}</p>
            <p>Forca: {variavel.hero.strength}</p>
            <p>Poder Magico: {variavel.hero.magicPower}</p>
          </div>
          
        </div>
        <div className="main-char-box">
          <img className="char-img-main" src={warriorImage} alt="" />
        </div>
          
          
        <div className="main-bottom-box">
          <div>
            <button className="main-button"><Link to="/battlepage">Lutar</Link></button>
          </div>
          <div>
              <button onClick={drinkLifePotion} className="main-button" >
                Tomar pocao de vida
              </button>
              <button onClick={drinkManaPotion} className="main-button" >
                Tomar pocao de mana
              </button>
            </div>
            <div>
              <button onClick={toggleStoreModal} className="main-button">
                Loja
              </button>
              <button onClick={toggleInventoryModal} className="main-button">
                Inventario
              </button>
            </div>
          </div>
          <p className="level-text">Level {data.hero.level}</p>
        <div className='hero-xp-bar'>
          <div className='hero-xp' style={{width: `${100/(experiencePerLevel[data.hero.level] - experiencePerLevel[data.hero.level - 1]) * (data.hero.experience - experiencePerLevel[(data.hero.level - 1)])}%`}}><p className="xp-text">{Math.floor(100/(experiencePerLevel[data.hero.level] - experiencePerLevel[data.hero.level - 1]) * (data.hero.experience - experiencePerLevel[(data.hero.level - 1)]))}{`%`}</p></div>
        </div>
        </div>

        {/* <div className="overlay"></div> */}
        {storeModal && (
          <div className="modal">
        <div id="inventory-modal-id" className="store-modal-content">
          <h2 className="shop-title">Loja de Bugigangas</h2>
          <div className="shop-message-box">
            <p className="seller-message">{sellerMessage}</p>
          </div>
          <div className="menu-seller-box">
            <div className="shop-menu">
              <div onClick={() => buyLifePotion(1)} className="item-menu"><img src={lifePotionImg} alt="" /></div>
              <div onClick={() => buyManaPotion(1)} className="item-menu"><img src={manaPotionImg} alt="" /></div>
            </div>
            <img className="seller01-img" src={shopSeller} alt="" />
          </div>
          
          {/* <button onClick={() => buyLifePotion(1)}>Comprar Pocao de Vida</button> */}
          <button className="btn-shop-exit" onClick={toggleStoreModal}>Sair</button>
          <div className="shop-stats">
            <p>{`Gold: ${data.hero.gold}`}</p>
            <p>{`Pocoes de vida: ${data.hero.lifePotion}`}</p>
            <p>{`Pocoes de mana: ${data.hero.manaPotion}`}</p>
          </div>
        </div>
        </div>)}
        {inventoryModal && (
          <div className="inventory-modal">
        <div id="store-modal-id" className="store-modal-content">
          <h2 className="shop-title">Inventario</h2>
          <div className="items-box">
            <div className="items-box-top">
              <div className="equipped-items">
                <div className="equipped-slot">
                  <img onClick={() => showDescription(itemList[variavel.hero.weaponEquiped])} className="equipped-slot-img" src={itemList[variavel.hero.weaponEquiped].image} alt="" />
                </div>
                <div className="equipped-slot"></div>
                <div className="equipped-slot"></div>
                <div className="equipped-slot"></div>
              </div>
              <div className="item-details">
                <p className="item-desc-title"><span className="desc-bold">{inventoryItemDesc.name}</span></p>
                <p className="item-desc-desc">{inventoryItemDesc.description}</p>
                <p className="item-desc-attack"><span className="desc-bold">Ataque:</span> {inventoryItemDesc.attack}</p>
                <p className="item-desc-precision"><span className="desc-bold">Precisao:</span> {inventoryItemDesc.precision}</p>
                <p className="item-desc-spcatk-name"><span className="desc-bold">Ataque Especial:</span> {inventoryItemDesc.spcAttackName}</p>
                <p className="item-desc-spcatk-desc">{inventoryItemDesc.spcAttackDesc}</p>
              </div>
            </div>
            <div className="backpack">
              <div className="bp-slot"></div>
              <div className="bp-slot"></div>
              <div className="bp-slot"></div>
              <div className="bp-slot"></div>
              <div className="bp-slot"></div>
              <div className="bp-slot"></div>
              <div className="bp-slot"></div>
              <div className="bp-slot"></div>
              <div className="bp-slot"></div>
              <div className="bp-slot"></div>

            </div>
            
          </div>
          {/* <button onClick={() => buyLifePotion(1)}>Comprar Pocao de Vida</button> */}
          <button className="btn-inventory-exit" onClick={toggleInventoryModal}>Sair</button>
          
        </div>
        </div>)}
        
        {/* {experiencePerLevel[(data.hero.level)] - data.hero.experience} */}
        
      </div>
      
       
    </div>
  )
}

export default MainScreen;