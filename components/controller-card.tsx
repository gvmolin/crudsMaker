import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import style from "../styles/component-controller-card.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@nextui-org/table";
import {Pagination} from "@nextui-org/react";

export default function ControllerCard():React.ReactNode{


    return(
        <Card className={style.container}>
            <CardBody style={{padding:"0"}}>
                <h1 className={style.title}>Controller</h1>

                <div className={style.controllersContainer}>

                    <h2>My tables</h2>
                    <Input
                        className={style.formElement}
                        placeholder="Search tables"
                        labelPlacement="outside"
                        endContent={
                            <FontAwesomeIcon style={{height:"3vh"}} icon={faMagnifyingGlass}></FontAwesomeIcon>
                        }
                    />
                    <Table aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn>Table Name</TableColumn>
                            <TableColumn>STATUS</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key="1">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>Active</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Zoey Lang</TableCell>
                                <TableCell>Paused</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Jane Fisher</TableCell>
                                <TableCell>Active</TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>William Howard</TableCell>
                                <TableCell>Vacation</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className={style.paginationContainer}>
                        <Pagination total={10} initialPage={1} />
                    </div>

                    <h2>Table options</h2>  
                    <Button
                        className={style.formElement}
                        color="primary"
                    >Add table</Button>


                </div>

            </CardBody>
        </Card>
    )
}