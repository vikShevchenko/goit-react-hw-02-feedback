export const App = () => {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Pleace leave feedback</h1>
    </div>
  );
};
