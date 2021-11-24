import './App.css';
import { Pagination } from 'antd';



function NewPagination({ todosLength, todosPerPage, pageClick}) {   
    const totalTodos = Math.ceil(todosLength / todosPerPage)
    
        if (totalTodos > 1) {
            return (
                    <section className='footer'>
                            <Pagination onChange={(page) => pageClick(page)} defaultPageSize={todosPerPage} defaultCurrent={1} total={todosLength} />
                            
                    </section> 
                    
        ) } else {
            return <span></span>
        }
    } 


export default NewPagination