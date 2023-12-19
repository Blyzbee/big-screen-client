import React, { useState, useEffect } from "react";
import "./AdminAnswers.scss";
import { isLogged } from "../../services/AccountAuth";
import { Navigate } from "react-router-dom";
import { getAllParticipantsAnswers } from "../../services/Api";
import Loading from "../../components/Loading/Loading";

const AdminAnswers = () => {
  const [participants, setParticipants] = useState(null);

  useEffect(() => {
    getAllParticipantsAnswers()
      .then((res) => setParticipants(res.data))
      .catch(() => alert("Une erreur est survenue"));
  }, []);

  if (!isLogged()) return <Navigate to="/admin" replace />;

  return (
    <div className="page-admin-answers">
      <div className="page-area">
        <div>
          <h1>
            Espace | <span>Réponses</span>
          </h1>
        </div>
        <div>
          {participants ? (
            <table>
              <thead>
                <tr>
                  <th>Participant ID</th>
                  <th>Question</th>
                  <th>Réponses</th>
                </tr>
              </thead>
              <tbody>
                {participants.map((participant) => (
                  <tr key={participant.participantId}>
                    <td>
					<p>Participant numéro :{participant.participantId}</p>
                      {participant.organizedAnswers.map((answer) => (
                        <div key={answer.questionId}>
                          <p>{answer.questionBody}</p>
                          <ul>
                            {answer.responses.map((response) => (
                              <li key={response.responseId}>
                                {response.response}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAnswers;
