import React, { useState } from 'react'; 
import './App.css'; 
 
function App() { 
    // State to store votes for each candidate     
    const [votes, setVotes] = useState({ CandidateA: 0, CandidateB: 0, CandidateC: 0 }); 
 
    // Function to handle voting     
    const voteCandidate = (candidate) => {         
      setVotes({ ...votes, [candidate]: votes[candidate] + 1 }); 
    }; 
 
    return ( 
        <div className="voting-app"> 
            <h2>Voting Application</h2> 
            <div className="candidates"> 
                {Object.keys(votes).map((candidate) => ( 
                    <div key={candidate} className="candidate"> 
                        <h3>{candidate}</h3> 
                        <p>Votes: {votes[candidate]}</p> 
                        <button onClick={() => voteCandidate(candidate)}>Vote</button> 
                    </div> 
                ))} 
            </div> 
            <h3>Leading Candidate: {Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b))}</h3> 
        </div> 
    ); 
} 
 
export default App; 
