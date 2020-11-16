import DiferencialDepoimento from "./DiferencialDepoimento";
import React from "react";
import {Carousel} from "react-bootstrap";

const DiferencialDepoimentosAccordion = ({depoimentos}) => (
    <Carousel>
        {
            depoimentos.map(depoimento => (
                <Carousel.Item>
                    <DiferencialDepoimento data={depoimento}/>
                </Carousel.Item>
            ))
        }
    </Carousel>
)

export default DiferencialDepoimentosAccordion