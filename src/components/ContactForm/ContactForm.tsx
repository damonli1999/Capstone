import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseTitle, chooseDirector, chooseWriter, chooseReleaseYear, chooseStars, chooseGenre } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';


interface ContactFormProps {
    id?: string;
    data?: {}
}

interface ContactState {
    title: string;
    director: string;
    writer: string;
    release_year: string;
    stars: string;
    genre: string;
}


export const ContactForm = (props: ContactFormProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store = useStore();
    const title = useSelector<ContactState>(state => state.title);
    const { register, handleSubmit } = useForm({})

    const onSubmit = (data: any, event: any) => {
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if (props.id!) {
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout(() => { window.location.reload() }, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseTitle(data.title));
            dispatch(chooseDirector(data.director));
            dispatch(chooseWriter(data.writer));
            dispatch(chooseReleaseYear(data.release_year));
            dispatch(chooseStars(data.stars));
            dispatch(chooseGenre(data.genre));
            server_calls.create(store.getState());
            setTimeout(() => { window.location.reload() }, 1000)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <Input {...register('title')} name="title" placeholder='Title' />
                </div>
                <div>
                    <label htmlFor="director">Director</label>
                    <Input {...register('director')} name="director" placeholder='Director' />
                </div>
                <div>
                    <label htmlFor="writer">Writer</label>
                    <Input {...register('writer')} name="writer" placeholder='Writer' />
                </div>
                <div>
                    <label htmlFor="release_year">Release Year</label>
                    <Input {...register('release_year')} name="release_year" placeholder='Release Year' />
                </div>
                <div>
                    <label htmlFor="stars">Stars</label>
                    <Input {...register('stars')} name="stars" placeholder='Stars' />
                </div>
                <div>
                    <label htmlFor="genre">Genre</label>
                    <Input {...register('genre')} name="genre" placeholder='Genre' />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
