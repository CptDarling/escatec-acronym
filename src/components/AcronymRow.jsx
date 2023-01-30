export const AcronymRow = ({acronym}) => {
    return (
        <tr>
            <td>{acronym.name}</td>
            <td>{acronym.description}</td>
        </tr>
    )
}