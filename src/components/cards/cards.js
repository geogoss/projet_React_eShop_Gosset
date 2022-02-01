import './cards.css'

function Cards(props) {
    return (
        <div>
            <div className="allArticle">
                <div className='card'>
                    <div className='imgdiv'>
                        <img src={props.image} alt="" />
                    </div>
                    <div className={props.stock <= 0 ? "bottomcard0" : "bottomcard" && props.stock == 1 ? "bottomcard1" : "bottomcard"}>
                        <h5>{props.name}</h5>
                        <p className='latin'>{props.latin}</p>
                        <div className='cadre'>
                            <p className='mesure'>Mesure du plant / taille du pot</p>
                            <span className='detail'>{props.detail}</span>
                        </div>
                        <div className='payement'>
                            <p className='prix'>Prix : {props.prix}€</p>
                            <button onClick={props.achat}><i class="fas fa-shopping-cart"> </i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards