import { Play } from "phosphor-react"
import { useForm } from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod' 

import { 
    HomeContainer, 
    FormContainer, 
    CountdownContainer, 
    Separator, 
    StartCountdownButton, 
    TaskInput, 
    MinutesAmountInput 
} from "./styles";
import { useState } from "react";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1,  'Infome a tarefa'),
    minutesAmount: zod.number()
    .min(5, 'O ciclo precisa ser de no mínimo de 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo de 60 minutos'),
})



type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
    interface Cycle {
        id: string;
        task: string;
        minutesAmount: number;
    }

    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    }) 

        function handleCreateNewCycle(data: NewCycleFormData) {
            const id = String(new Date().getTime())
            const newCycle: Cycle = {
                id,
                task: data.task,
                minutesAmount: data.minutesAmount,
            }

            setCycles((state) => [...state, newCycle])
            setActiveCycleId(id)
            reset()
        }

        const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

        console.log(activeCycle)

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




