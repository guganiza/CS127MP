'use client'
// BackButton.js
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#473C38',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const hoverStyle = {
    backgroundColor: '#63584F',
  };

  return (
    <button
      onClick={handleGoBack}
      style={buttonStyle}
      onMouseOver={() => Object.assign(buttonStyle, hoverStyle)}
      onMouseOut={() => Object.assign(buttonStyle, {})}
    >
      Go Back
    </button>
  );
};

export default BackButton;