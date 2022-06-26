import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>      
      <List />
      <Form />
      <Timer />
    </div>
  );
}

export default App;
