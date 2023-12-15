import React, {useState,useRef, useEffect} from 'react';
import Axios from '../../services/CallerService';
import './AdminAnswers.scss';
import Navbar from '../Navbar/Navbar';

const AdminAnswers = () => {
    const [answers, setAnswers] = useState([]);
    const flag = useRef(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!flag.current) {
                    const response = await Axios.get("http://127.0.0.1:8000/api/answers");
                    console.log(response.data.answers);
                    setAnswers(response.data.answers);
                    flag.current = true;
                }
            } catch (error) {
                console.error('Erreur de requête API:', error);
            }
        };

        fetchData();

        return () => {
            flag.current = false;
        };
    }, []);

    return (
        <div className='page-admin-answers'>

            <Navbar/>

            <div className='page-area'>
                <div>
                    <h1>Espace | <span>Réponses</span></h1>
                </div>

                <div>
                    {answers.map((answer) => (
                        <div key={answer.id}>
                            <h3>{answer.participant_id}</h3>
                            <h3>{answer.question_id}/20 {answer.response}</h3>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>

    );
};

export default AdminAnswers;
