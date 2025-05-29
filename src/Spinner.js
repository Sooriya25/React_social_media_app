
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({ size = 80, color = "blue", loading = true, fullScreen = false }) => {
  const containerStyle = fullScreen
    ? {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      };

  return (
    <div style={containerStyle}>
      <ClipLoader size={size} color={color} loading={loading} />
    </div>
  );
};

export default Spinner;
