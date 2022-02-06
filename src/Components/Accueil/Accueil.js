import React, {useState, useEffect} from 'react';
import Cards from '../cards/cards';
import axios from '../config/axios-firebase';
import DisplayedArticles from '../../Components/DisplayedArticles/DisplayedArticles';
import { useNavigate } from 'react-router-dom';


export default function Accueil(props) {
  const navigate = useNavigate();

  //State
  const [articles, setArticles] = useState([]);

  //ComponentDidMount
  useEffect(()=> {

    axios.get('/articles.json')
    .then(response => {
      const articlesArray = [];

      for (let key in response.data){
        articlesArray.unshift({
          ...response.data[key],
          id: key
        });
      }
      setArticles(articlesArray);
    })
    .catch(error =>{
      console.log(error);
    })
  },[]);
  //DisplayedArticles (articles)
    //<section>...</section>

    //DisplayedArticle

  return (
      <div className='cardsmap d-flex flex-wrap justify-content-around'>
        {props.item.map((item, i) => (<Cards key={i} resetText={props.resetText} changeMonChoix={props.changeMonChoix}  achat={() => {props.acheter(i)}} image={item.img} name={item.nom} latin={item.latin} detail={item.detail} prix={item.prix} />))}
        <DisplayedArticles articles={articles}/>
      </div>
  );
  }
