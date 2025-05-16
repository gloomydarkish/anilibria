// import React from 'react';
// import { Controller, useForm } from 'react-hook-form';
// import PersonIcon from '@mui/icons-material/Person';
// import { Button, TextField } from '@mui/material';
//
// import stl from './index.module.scss';
//
// import { INITIAL_VALUES } from '@/widgets/Auth/Login/model/constans/index.js';
//
// export const LoginForm = () => {
//     const { handleSubmit , control } = useForm({
//         defaultValues: INITIAL_VALUES,
//         node: 'onSubmit',
//     });
//
//     const onSubmit = (data) => {
//         console.log({ data });
//     };
//
//     return (
//         <form className={stl.form} onSubmit={handleSubmit(onSubmit)}>
//             {/*<Controller*/}
//             {/*    control={control}*/}
//             {/*    name='login'*/}
//             {/*    render={({ field }) => <TextField {...field} />}*/}
//             {/*    label="Login"*/}
//             {/*/>*/}
//             {/*<Controller*/}
//             {/*    control={control}*/}
//             {/*    name='password'*/}
//             {/*    render={({ field }) => <TextField {...field} />}*/}
//             {/*    label='Password'*/}
//             {/*/>*/}
//             <TextField
//                 id='outlined-basic'
//                 label='Login'
//                 variant='outlined'
//                 className={stl.form__input}
//             />
//             <TextField
//                 id='outlined-basic'
//                 label='Password'
//                 variant='outlined'
//                 className={stl.form__input}
//             />
//             <Button
//                 variant={'contained'}
//                 type={'submit'}
//                 onSubmit={handleSubmit(onSubmit)}
//                 className={stl.form__btn}
//                 startIcon={<PersonIcon />}
//             >
//                 Авторизация
//             </Button>
//         </form>
//     );
// };

//----------------

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, Link, TextField, Typography } from '@mui/material';

export const LoginForm = () => {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            login: '',
            password: '',
        },
        mode: 'onSubmit',
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Box
            sx={{
                // padding: 4,
                // borderRadius: 2,
                maxWidth: 360,
                // margin: '0 auto',
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <Controller
                    name='login'
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label='Логин'
                            variant='outlined'
                            fullWidth={true}
                            margin='normal'
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            InputProps={{
                                style: { color: '#fff' },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#fff',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#fe3635', // Красный цвет при наведении
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#fe3635',
                                    },
                                },
                            }}
                        />
                    )}
                />
                <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label='Пароль'
                            type='password'
                            variant='outlined'
                            fullWidth={true}
                            margin='normal'
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            InputProps={{
                                style: { color: '#fff' },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#fff',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#fe3635',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#fe3635',
                                    },
                                },
                            }}
                        />
                    )}
                />
                <Button
                    type='submit'
                    fullWidth={true}
                    variant='contained'
                    sx={{
                        backgroundColor: '#9e9e9e',
                        color: '#fff',
                        marginTop: 3,
                        '&:hover': {
                            backgroundColor: '#d32f2f',
                        },
                    }}
                >
                    Войти
                </Button>
            </form>
            <from className='from-link'>
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Link href='#' underline='hover' sx={{ color: '#9e9e9e', paddingBottom: 1 }}>
                        Регистрация
                    </Link>
                    <Link href='#' underline='hover' sx={{ color: '#9e9e9e' }}>
                        Восстановить пароль
                    </Link>
                </Box>
            </from>
        </Box>
    );
};
