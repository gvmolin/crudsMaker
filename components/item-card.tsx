import { Card, CardBody } from "@nextui-org/card";
import style from "../styles/component-item-card.module.scss";
import { Input } from "@nextui-org/input";
import { Switch } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@nextui-org/table";
import { JSXElementConstructor, useState, ReactElement, useEffect } from "react";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";

export default function ItemCard(): ReactElement {
    enum DataTypeEnum {
        string = "string",
        number = "number",
        boolean = "boolean"
    }

    enum InputTypeEnum {
        textInput = "textInput",
        numberInput = "numberInput",
        booleanInput = "switchInput"
    }

    interface IField {
        name:string,
        dataType: DataTypeEnum,
        inputType: InputTypeEnum,
        index:number,
        unique:boolean
    }

    const [fields, setFields] = useState<IField[]>([]);
    const dataTypeArr: string[] = Object.values(DataTypeEnum)
        .map((el) => (typeof el === 'string' ? el : ''));
    const inputTypeArr: string[] = Object.values(InputTypeEnum)
        .map((el) => (typeof el === 'string' ? el : '')); 

    function addField (){
        
        setFields([...fields, {
            name:"",
            dataType:DataTypeEnum.string,
            inputType: InputTypeEnum.textInput,
            index: fields[fields.length - 1]?.index + 1 | 0,
            unique:false
        }])
        
    }

    useEffect(() => {
        console.log(fields)
    }, [fields])

    function removeField(e:IField){
        setFields(prevFields => {
            const fieldsClone = [...prevFields];
            const found = fieldsClone.findIndex(el => el.index === e.index);
            fieldsClone.splice(found, 1);
            return fieldsClone;
        })
    }

    function handleSubmit(){
        console.log(fields)
    }

    return (
        <Card className={style.container}>
            <CardBody className={style.cardBody} style={{ padding: "0", overflowY: "hidden" }}>

                <h1 className={style.title}>Create table</h1>

                <div className={style.controllersContainer}>
                    <form>
                        <div>
                            <Input
                                label="Name"
                                className={style.formElement}
                            />

                        </div>

                        <Input
                            label="Description"
                            className={style.formElement}
                        />

                        <div className={style.switchContainer}>
                            <span>Active</span>
                            <Switch defaultSelected />

                        </div>

                        <hr />

                        <div className={style.metaContainer}>
                            {/* <div className={style.metaButtonsContainer}>
                        
                    </div> */}

                            <Table aria-label="Example static collection table" classNames={{
                                base: "max-h-[100%] overflow-hidden",
                                table: "min-h-[20vh] overflow-hidden",
                            }}>
                                <TableHeader>
                                    <TableColumn width="25%">Name</TableColumn>
                                    <TableColumn width="25%">Data Type</TableColumn>
                                    <TableColumn width="25%">Input Type</TableColumn>
                                    <TableColumn width="25%">Unique</TableColumn>
                                    <TableColumn width="100%" align="end" style={{ display: "flex", justifyContent: "end", alignItems: "center", paddingRight: "1vw" }}>
                                        Controls</TableColumn>
                                </TableHeader>
                                
                                <TableBody items={fields}>
                                    {(field) => (
                                        <TableRow key={field.index}>
                                            <TableCell>
                                                <Input
                                                    onChange={(e) => field.name = e.target.value as string}
                                                />
                                            </TableCell>
                                            <TableCell>      
                                                <Select
                                                    placeholder="Select"
                                                    className="max-w-xs"
                                                    onChange={(e) => field.dataType = e.target.value as DataTypeEnum}
                                                >
                                                    {dataTypeArr.map((type) => (
                                                        <SelectItem key={type}>
                                                            {type}
                                                        </SelectItem>
                                                    ))}
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                <Select
                                                    placeholder="Select"
                                                    className="max-w-xs"
                                                >
                                                    {inputTypeArr.map((type) => (
                                                        <SelectItem key={type}>
                                                            {type}
                                                        </SelectItem>
                                                    ))}
                                                </Select>

                                            </TableCell>
                                            <TableCell>
                                                <Switch
                                                    onChange={(e) => field.unique = !!e.target.checked}
                                                >
                                                </Switch>

                                            </TableCell>
                                            <TableCell >
                                                <div style={{ display: "flex", justifyContent: "end", alignItems: "center", height:"100%" }}>
                                                <Button
                                                        color="danger"
                                                        onClick={()=>removeField(field)}

                                                    >Remove field</Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                            
                        </div>
                        <div className={style.formButtonContainer}>
                            <Button color="primary" variant="ghost" onClick={addField} style={{marginTop:"1vh"}}>Add Field</Button>
                        </div>
                        
                        <hr />


                        <div className={style.buttonContainer}>
                            <Button
                                className={style.formElement}
                                color="primary"
                                onClick={handleSubmit}
                            >Submit</Button>

                        </div>



                    </form>
                </div>

            </CardBody>
        </Card>
    )
}