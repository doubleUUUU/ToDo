import './App.css';
import TDCard from './TDCard';


function TDList({ sortedTodos, doneTodo, removeTodo, edit}) {
    

    return (
        <main className="tds">
            { sortedTodos.length ?  sortedTodos.map( todo => {
            return <TDCard editing={edit} todo={todo} onChange={doneTodo} deleteTodo={removeTodo}/>
            }) : <p className="noTD">You dont have ToDos</p>}
        </main>
    )
}

export default TDList