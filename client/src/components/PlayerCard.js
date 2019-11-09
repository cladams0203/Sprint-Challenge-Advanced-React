import React from 'react'
import { Card } from '../styled/styled';
export function PlayerCard (props) {
    return (
        <Card>
            <h2>{props.player && props.player.name}</h2>
            <span>Country: {props.player && props.player.country}</span>
            <span>Searches: {props.player && props.player.searches}</span>
        </Card>
    )
}