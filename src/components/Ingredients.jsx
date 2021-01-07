import React, {useContext} from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import {PizzaContext} from '../providers/PizzaProvider';

export const IngredientsList = () => {
    const {ingredients} = useContext(PizzaContext);
    console.log(ingredients);
    return (
        <ListGroup>
            <ListGroupItem>Docela bruh moment ngl</ListGroupItem>
            {ingredients.map((item, i) => (<IngredientComponent key={i} name={item.name} category={item.category} />))}
        </ListGroup>
    )
}

export const IngredientComponent = (props) => {
    return (
        <ListGroupItem>Název: {props.name}, Kategorie: {props.category}</ListGroupItem>
    );
}