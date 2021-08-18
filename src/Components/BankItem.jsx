import React from 'react'

export default function BankItem({name, desc, age, path}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{desc}</p>
            <p>{age}</p>
            <a href={path}>{path}</a>
        </div>
    )
}
