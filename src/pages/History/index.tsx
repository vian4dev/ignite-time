import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../contexts/CycleContext'

export function History() {
    const { cycles } = useContext(CyclesContext)

    return (
        <HistoryContainer>
            <h1>Meu Histórico</h1>
            <pre>
                {JSON.stringify(cycles, null, 2)}
            </pre>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefas</th>
                            <th>Duração</th>
                            <th>Inicío</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Estudar</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="green">Concluído</Status></td>
                        </tr>
                        <tr>
                            <td>Estudar</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="green">Concluído</Status></td>
                        </tr>
                        <tr>
                            <td>Estudar</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="green">Concluído</Status></td>
                        </tr>
                        <tr>
                            <td>Estudar</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="green">Concluído</Status></td>
                        </tr>
                        <tr>
                            <td>Estudar</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="green">Concluído</Status></td>
                        </tr>
                        <tr>
                            <td>Estudar</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="green">Concluído</Status></td>
                        </tr>
                        <tr>
                            <td>Estudar</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="green">Concluído</Status></td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}