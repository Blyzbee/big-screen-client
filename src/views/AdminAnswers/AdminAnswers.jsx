import React, {useState,useRef, useEffect} from 'react';
import Axios from '../../services/CallerService';
import './AdminAnswers.scss';
import Navbar from '../Navbar/Navbar';

const AdminAnswers = () => {
    const [answers, setAnswers] = useState([]);
    const [participants, setParticipant] = useState([]);
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


    useEffect(() => {
        const fetchDataP = async () => {
            try {
                if (!flag.current) {
                    const response = await Axios.get("http://127.0.0.1:8000/api/participant");
                    console.log(response.data.participants);
                    setParticipant(response.data.participants);
                    flag.current = true;
                }
            } catch (error) {
                console.error('Erreur de requête API:', error);
            }
        };

        fetchDataP();

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
                    {participants.map((participant) => (
                        <div key={participant.id}>
                            <p>{participant.email}</p>
                        </div>
                    ))}
                </div>

                <div>
                    {answers.map((answer) => (
                        <div key={answer.id}>
                            <>{answer.participant_id}</>
                            <p>{answer.question_id}/20 {answer.response}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>

    );
};

export default AdminAnswers;
