import style from "../styles/component-header.module.scss"
import {Card, CardBody, Button} from "@nextui-org/react";

export default function Header(){
    return (
        <Card className={style.container}>
            <CardBody className={style.cardBody}>
                <div className={style.logoContainer}><h1>{"<crudsMaker/>"}</h1></div>
            </CardBody>
        </Card>
    )
}