import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styled";
import * as zod from 'zod'
import { useForm, useFormContext } from "react-hook-form";
import { useContext } from "react";
import { CyclesContext } from "../..";

export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext)
    const { register} = useFormContext()

    return (
        <FormContainer>
            <div>
                <label htmlFor="task">Vou trabalhar em </label>
                <TaskInput
                    id="task"
                    type="text"
                    list="tasks-suggestions"
                    placeholder="Dê um nome para o seu projeto"
                    disabled={!!activeCycle}
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
                    min={1}
                    disabled={!!activeCycle}
                    {...register('minutesAmount', { valueAsNumber: true })}
                />

            </div>

            <span> minutos.</span>
        </FormContainer>
    )
}