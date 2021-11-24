
import './App.css';
import {  Radio } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';




function Filters({ doneUndone, setDoneUnDone, setOrder, order }) {

    function handleDoneChange(e) {
        setDoneUnDone(e.target.value)
    }

    function handleOrderChange(e) {
        setOrder(e.target.value)
    }


    return (
        <section className="control">
        <Radio.Group value={doneUndone} onChange={handleDoneChange}>
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="done">Done</Radio.Button>
          <Radio.Button value="undone">Undone</Radio.Button>
        </Radio.Group>
        <Radio.Group value={order} onChange={handleOrderChange}>
          <Radio.Button value="asc">Asc</Radio.Button>
          <Radio.Button value="desc">Desc</Radio.Button>
        </Radio.Group>
        </section>
    )
}


export default Filters