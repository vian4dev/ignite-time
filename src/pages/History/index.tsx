import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
    return (
        <HistoryContainer>
            <h1>Meu Histórico</h1>
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