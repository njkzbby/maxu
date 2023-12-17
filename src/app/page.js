'use client'
import {Input, TextField, Typography} from '@mui/material';
import {useState} from "react";
import classes from './home.module.css'

export default function Home() {
    const [h1, setH1] = useState(0);
    const [h2, setH2] = useState(0);
    const [q1, setQ1] = useState(0);
    const [q2, setQ2] = useState(0);
    const [hNas, setHNas] = useState(0)
    const [d, setD] = useState(0);
    const [q, setQ] = useState(0);

    const getWheelDurability = (h1, h2, q1, q2, hNas, q) => {
        const result = Math.sqrt(
            (hNas * (q2 * q2 - q1 * q1) + (h1 - h2) * (q * q)) /
            (h1 * q2 * q2 - h2 * q1 * q1)
        );


        return result;
    };

    const wheelDurability = getWheelDurability(h1, h2, q1, q2, hNas, q)

    return (
        /*<main className="flex min-h-screen flex-col items-center p-24 justify-center gap-10">*/
        <main className={classes.layout}>
            <Typography variant="h5">Обточка рабочего колеса для любого рабочего колеса насоса</Typography>
            <Typography>
                h1 - напор с производительностью q1 в м <br/>
                h2 - напор с производительностью q2 в м <br/>
                q1 - производительность при q * 0.8 в м3/с <br/>
                q2 - производительность при q * 1,2 в м3/с <br/>
                Hnas - напор одного насоса в м <br/>
                d - начальный диаметр рабочего колеса в мм <br/>
                q - данная производительность в м3/с

            </Typography>
            <div className='flex flex-row gap-10'>
                <div className='flex flex-col gap-2'>
                    <TextField
                        placeholder='h1'
                        autoComplete='off'
                        variant="filled"
                        onChange={(e) => setH1(Number(e.target.value))} type='numebr'
                        label='введите ваше h1'/>

                    <TextField
                        placeholder='h2'
                        variant="filled"
                        onChange={(e) => setH2(Number(e.target.value))} type='numebr'
                        label='введите ваше h2'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <TextField
                        placeholder='q1'
                        variant="filled"
                        onChange={(e) => setQ1(Number(e.target.value))} type='numebr'
                        label='введите ваше q1'/>

                    <TextField
                        placeholder='q2'
                        variant="filled"
                        onChange={(e) => setQ2(Number(e.target.value))} type='numebr'
                        label='введите ваше q2'/>
                </div>
            </div>
            <div className='flex flex-row gap-10'>
                <TextField
                    placeholder='HNas'
                    variant="filled"
                    onChange={(e) => setHNas(Number(e.target.value))} type='numebr'
                    label='введите ваше HNas'/>
                <TextField
                    placeholder='d'
                    variant="filled"
                    onChange={(e) => setD(Number(e.target.value))} type='numebr'
                    label='введите ваше d'/>
                <TextField
                    placeholder='q'
                    variant="filled"
                    onChange={(e) => setQ(Number(e.target.value))} type='numebr'
                    label='введите ваше q'/>
            </div>
            <div>
                {wheelDurability ? null : <Typography> Введите данные </Typography>}
                <Typography variant='h4'>Ваша обточка
                    равна: {wheelDurability > 1 ? 'Внесённые данные недопустимы' : wheelDurability || 'Недостаточно данных или данные недопустимы'} </Typography>
                <Typography variant='h4'>Диаметр после
                    обточки: {wheelDurability > 1 ? "'Внесённые данные недопустимы'" : wheelDurability * d || 'Недостаточно данных или данные недопустимы'}</Typography>
            </div>
        </main>
    )
}
