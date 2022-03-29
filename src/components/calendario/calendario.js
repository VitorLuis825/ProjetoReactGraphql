import './calendario.css'
import {useQuery,gql} from '@apollo/client'

let date = new Date
let mes = ['Janeiro','Feveiro','Março','Abril','Junho','Julho','Agosto','Setembrio','Outubro','Novembro','Dezembro']

const equip = gql`
    query GetEquipamentos{
        equipamentos{
            nome,
            quantidade,
            id
        }
    }
`


export default ()=>{
    //const {data, loading, error} = useQuery(equip)

    return(
        <div className='calendario'>
            <div className="title">
                {`${date.getDate()} de ${mes[date.getMonth()]}`}
            </div>
            <div className='lines-container'>
                <div className='lines 8-9' />
                <div className='lines 9-10' />
                <div className='lines 10-11' />
                <div className='lines 11-12' /> 
                <div className='lines 12-13 intervalo' />
                <div className='lines 13-14 intervalo' />
                <div className='lines 14-15' />
                <div className='lines 15-16' />
                <div className='lines 16-17' />
                <div className='lines 17-18' />

            </div>
        </div>
    )
}