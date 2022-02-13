const STEVEN_VALLARSA = {
  name: "Steven Vallarsa",
  role: "Software Developer",

  isEasyGoing: true,
  isHardWorking: true,
  hasVastPotential: true,
  isAlwaysLearning: true,
  alwaysImpressesBeyondExpectations: true,
};

function readyForWork(candidate) {
  if (
    candidate.alwaysImpressesBeyondExpectations &&
    candidate.isAlwaysLearning &&
    candidate.hasVastPotential &&
    candidate.isHardWorking &&
    candidate.isEasyGoing
  ) {
    return `Candidate ${candidate.name} is READY FOR WORK as a ${candidate.role}`;
  }
}

// Insert function into your organization and discover what great things can be done
readyForWork(STEVEN_VALLARSA);
