import { useParams } from "react-router-dom";

const Diary = () => {
    const { id: diaryId } = useParams<{ id: string }>();

    return <div>{diaryId}번 일기입니다.</div>
}

export default Diary;