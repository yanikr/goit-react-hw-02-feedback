

export const FeedbackOptions  = ({ options, onLeaveFeedback }) => (
    options.map(option => (<button key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>))
);