import React from "react";

export default function Card(props) {
    return (
        <li className="card">
            <img
            src={props.image}
            alt={props.title}
            className="card__image"
            onClick = {() => props.onCardClick(props.card)}
            />
            <div className="card__description">
                <h2 className="card__name">{props.title}</h2>
                <div>
                    <button type="button" className="card__like" />
                    <p className="card__like-count">{props.likeCount}</p>
                </div>                
            </div>    
            <button type="button" className="card__delete" />       
        </li>
    )
}