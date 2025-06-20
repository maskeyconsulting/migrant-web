// src/components/FeedbackButtons.tsx
// Yes/No feedback buttons

interface FeedbackButtonsProps {
  onYes: () => void;
  onNo: () => void;
}

const FeedbackButtons = ({ onYes, onNo }: FeedbackButtonsProps) => {
  return (
    <div className="my-12">
      <p className="font-medium mb-4">Is this info correct?</p>
      <div className="flex space-x-4">
        <button
          onClick={onYes}
          className="border-2 border-gray-800 py-2 px-12 rounded-lg font-medium"
        >
          YES
        </button>
        <button
          onClick={onNo}
          className="bg-gray-100 py-2 px-12 rounded-lg font-medium"
        >
          NO
        </button>
      </div>
    </div>
  );
};

export default FeedbackButtons;
