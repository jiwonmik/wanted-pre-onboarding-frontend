import { useTodoState } from '../../../context/ToDoContext';
import { TodoHeadBlock } from './styles';

function TodoHead() {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.isCompleted);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

    return (
      <TodoHeadBlock>
        <h1>{dateString}</h1>
        <div className="day">{dayName}</div>
        <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
      </TodoHeadBlock>
    );
  }
  
  export default TodoHead;