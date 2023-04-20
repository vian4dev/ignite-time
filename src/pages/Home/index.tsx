import { Play } from "phosphor-react"
import { useForm } from 'react-hook-form'

import { 
    HomeContainer, 
    FormContainer, 
    CountdownContainer, 
    Separator, 
    StartCountdownButton, 
    TaskInput, 
    MinutesAmountInput 
} from "./styles";

export function Home() {
    const { register, handleSubmit, watch } = useForm() 

        function handleCreateNewCycle(data: any) {
            console.log(data)
        }

        const task = watch('task')
        const isSubmitDisabled = !task

  
    return (
            <HomeContainer>
                <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                    <FormContainer>
                        <div>
                            <label htmlFor="task">Vou trabalhar em </label>
                            <TaskInput 
                              id="task" 
                              type="text" 
                              list="tasks-suggestions"
                              placeholder="Dê um nome para o seu projeto"
                              {...register('task')}
                            />

                            <datalist id="tasks-suggestions">
                                <option value="Laranja"></option>
                                <option value="Banana"></option>
                                <option value="Manga"></option>
                            </datalist>

                            <label htmlFor="minutesAmount"> durante </label>
                            <MinutesAmountInput 
                              id="minutesAmount" 
                              type="number" 
                              placeholder="00"
                              step={5}
                              min={5}
                              max={60}
                              {...register('minutesAmount', { valueAsNumber: true})}
                            />

                        </div>

                        <span> minutos.</span>
                    </FormContainer>


                    <CountdownContainer>
                        <span>0</span>
                        <span>0</span>
                        <Separator>:</Separator>
                        <span>0</span>
                        <span>0</span>
                    </CountdownContainer>

                    <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                        <Play size={24} />
                        Começar
                    </StartCountdownButton>
                </form>
            </HomeContainer>
    )
}




