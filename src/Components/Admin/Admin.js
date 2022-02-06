import React from 'react';
import { useState } from 'react';
import Input from '../../Components/UI/Input/Input'
import classes from './Admin.module.css';
import axios from '../config/axios-firebase';
import Routes from '../../App'

function Admin(props) {

  //States input
  const [inputs, setInputs] = useState({
    titre: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: "Titre de l'article"
      },
      value: '',
      label: 'Titre',
      valid: false,
      validation: {
        required: true,
        minLength: 5,
        maxLength: 85
      },
      touched: false,
      errorMessage: 'Le titre doit faire entre 5 et 85 caractères.'
    },
    contenu: {
      elementType: 'textarea',
      elementConfig: {},
      value: '',
      label: "Contenu de l'article",
      valid: false,
      validation: {
        required: true
      },
      touched: false,
      errorMessage: 'Le contenu ne doit pas être vide.'
    },
    image: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: "Image de l'article"
      },
      value: '',
      label: 'image',
      valid: false,
      validation: {
        required: true
      },
      touched: false,
      errorMessage: 'Il doit y avoir une image pour cet article'
    },
    brouillon: {
      elementType: 'select',
      elementConfig: {
        options: [
          { value: true, displayValue: 'Brouillon' },
          { value: false, displayValue: 'Publié' }
        ]
      },
      value: true,
      label: 'Etat',
      valid: true,
      validation: {}
    }
  });

  const [valid, setValid] = useState(false);

  //Fonctions
  const checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  const inputChangedHandler = (event, id) => {

    //Change la valeur
    const nouveauxInputs = { ...inputs };
    nouveauxInputs[id].value = event.target.value;
    nouveauxInputs[id].touched = true;

    //Verification de la valeur
    nouveauxInputs[id].valid = checkValidity(event.target.value, nouveauxInputs[id].validation);

    setInputs(nouveauxInputs);

    //Verification du formulaire
    let formIsValid = true;
    for (let input in nouveauxInputs) {
      formIsValid = nouveauxInputs[input].valid && formIsValid;
    }
    setValid(formIsValid);

  };

  const formHandler = event => {
    event.preventDefault();

    const article ={
      titre: inputs.titre.value,
      contenu: inputs.contenu.value,
      image: inputs.image.value,
      brouillon: inputs.brouillon.value
    }

    axios.post('/articles.json', article)
    .then(response =>{
      console.log(response);
      props.history.replace(Routes.Accueil)
    })
    .catch(error =>{
      console.log(error);
    });

  }

  //Variables
  const formElementsArray = [];
  for (let key in inputs) {
    formElementsArray.push({
      id: key,
      config: inputs[key]
    })
  }

  let form = (
    <form className={classes.Admin} onSubmit={(e) => formHandler(e)}>
      {formElementsArray.map(formElement => (
        <Input
          key={formElement.id}
          id={formElement.id}
          value={formElement.config.value}
          label={formElement.config.label}
          type={formElement.config.elementType}
          config={formElement.config.elementConfig}
          valid={formElement.config.valid}
          touched={formElement.config.touched}
          errorMessage={formElement.config.errorMessage}
          changed={(e) => inputChangedHandler(e, formElement.id)} />
      ))}
      <div className={classes.submit}>
        <input type='submit' value="Ajouter un article" disabled={!valid}/>
      </div>
    </form>
  )

  return (
    <div className='container'>
      <h1>Ajouter un article</h1>
      {form}
    </div>
  );
}

export default Admin;