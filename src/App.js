import React from 'react';
import Fruitcounter from './components/Fruitcounter';
import {useForm} from 'react-hook-form';
import './App.css';


function App() {
    const [strawberries, setStrawberries] = React.useState(0)
    const [bananas, setBananas] = React.useState(0)
    const [kiwis, setKiwis] = React.useState(0)
    const [apples, setApples] = React.useState(0)

    const {handleSubmit, formState: {errors}, register, watch} = useForm({mode: 'onBlur'});

    const selectedReferrer = watch('delfreq');

    function onFormSubmit(data) {
        console.log(data);
        console.log(strawberries, kiwis, apples, bananas);
    }


    return (
        <div>

            <Fruitcounter fruitAmount={strawberries} fruitName={'aardbei'} setFruits={setStrawberries}/>
            <Fruitcounter fruitAmount={bananas} fruitName={'banaan'} setFruits={setBananas}/>
            <Fruitcounter fruitAmount={kiwis} fruitName={'kiwi'} setFruits={setKiwis}/>
            <Fruitcounter fruitAmount={apples} fruitName={'appel'} setFruits={setApples}/>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
                    <legend>Gegevens</legend>

                    <label htmlFor='firstname'>
                        Voornaam:
                        <input
                            type='text'
                            id='firstname'
                            {...register('firstname', {
                                required: 'Voornaam mag niet leeg zijn'
                            })}
                        />
                        {errors.firstname && <p>{errors.firstname.message}</p>}
                    </label><br/>

                    <label htmlFor='familyname'>
                        Achternaam:
                        <input
                            type='text'
                            id='familyname'
                            {...register('familyname', {
                                required: 'Achternaam mag niet leeg zijn'
                            })}
                        />
                        {errors.familyname && <p>{errors.familyname.message}</p>}

                    </label><br/>

                    <label htmlFor='age'>
                        Leeftijd
                        <input
                            type='number'
                            id='age'
                            {...register('age', {
                                min: {
                                    value: 18,
                                    message: 'U dient minimaal 18 jaar oud te zijn!'
                                },
                                required: {
                                    value: /d/,
                                    message: 'Alleen getallen graag'
                                }

                            })}
                        />
                        {errors.age && <p>{errors.age.message}</p>}


                    </label><br/>

                    <label htmlFor='zipcode'>
                        Postcode
                        <input
                            type='text'
                            id='zipcode'
                            {...register('zipcode', {

                                required: 'Postcode is verplicht',
                                pattern: {
                                    value: /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i,
                                    message: 'Geen geldige postcode!',
                                },

                            })}
                        />
                        {errors.zipcode && <p>{errors.zipcode.message}</p>}

                    </label><br/>

                    <label htmlFor='delfreq'>
                        Bezorgfrequentie?
                        <select id="delfreq" {...register('delfreq')} >
                            <option value="everyWeek">iedere week</option>
                            <option value="everyOtherWeek">om de week</option>
                            <option value="everyMonth">iedere maand</option>
                            <option value="other">Anders</option>
                        </select>
                        {selectedReferrer === "other" &&
                        <input
                            type='text'
                            id='delfreq'
                            size='25'
                            {...register('delfreq-anders'
                            )}
                        />
                        }
                        <br/>

                    </label>

                    <label htmlFor='note'>
                        Opmerkingen:
                        <textarea
                            name="notes"
                            id="notes"
                            cols="30"
                            rows="10"
                            {...register('note')}

                        />

                    </label><br/>

                    {/*<label htmlFor='details-approve'>*/}

                    <input type='checkbox'
                           id='nieuwsbrief'

                           {...register('approve')}
                    />
                    <label htmlFor="nieuwsbrief">Schrijf me in voor de nieuwsbrief</label><br/>
                    <label htmlFor='details-submit'>
                        <button type='submit'>Versturen</button>

                    </label>
                </fieldset>
            </form>

        </div>
    );
}

export default App;

// 🍓 aardbeien
// <button name="strawberries" disabled={strawberries <= 0} id='min' onClick={() => setStrawberries(strawberries-1)}>-</button>
// {strawberries}
// <button name="strawberries" id='plus' onClick={() => setStrawberries(strawberries+1)}>+</button>
// <br/>
