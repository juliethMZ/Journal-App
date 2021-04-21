import React from 'react'

export const JournalEntry = () => {
    return (
        <div className= "journal__entry pointer">
            <div
             className="journal__entry-picture"
             style = {{
                 backgroundSize: 'cover',
                 backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tooltyp.com%2F8-beneficios-de-usar-imagenes-en-nuestros-sitios-web%2F&psig=AOvVaw0SfQg9gofdnZBA60WjSymd&ust=1619020684995000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICo46CYjfACFQAAAAAdAAAAABAD)',

             }}
            ></div>

            <div className= "journal__entry-body">
                <p className ="journal__entry-title">
                    HOY ES UN GRAN DIA
                </p>

                <p className= "journal__entry-content">
                   Es facíl y tu puedes lograrlo
                </p>

            </div>

            <div className = "journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>

            </div>
        </div>
    )
}
