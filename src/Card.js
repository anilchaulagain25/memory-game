import { useState } from 'react'
import './card.css'
export function Card(props) {
    const [flipped, setFlipped] = useState(false);
    const onBoxClick = () => {
        props.onBoxClick(flipped, setFlipped, props.img);
    }
    return <section className={"container"}>

        <div onClick={onBoxClick} className={"card " + (flipped ? 'flipped' : '')}>
            <div className={"front"}>
                <img
                    alt="what image"
                    src="images/what.png" />

            </div>
            <div className={"back"}>
                <img
                    alt="image to find"
                    src={"images/" + props.img} />
            </div>
        </div>
    </section >

}