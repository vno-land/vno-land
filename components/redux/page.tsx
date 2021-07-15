import { useSelector, useDispatch } from 'react-redux';
import { RootState, visitLesson } from '../../store';

interface PageProps {
  name: string;
}

export default function Page(props: PageProps) {
  const data = useSelector<RootState>((state) => state.learn.lessons);

  const dispatch = useDispatch();
  const mark = () => {
    dispatch(visitLesson(props.name));
  };

  return (
    <div>
      <button onClick={mark}>Mark</button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
