import MonsterMain from './components/Monster/MonsterMain';

function App() {
  const styles = {
    textAlign: 'center',
    background: 'linear-gradient(to left, rgba(7, 27, 82, 1) 0%, rgba(0, 128, 128, 1) 100%',
    h1: {
      background: 'pink',
      padding: '1rem',      
    }
  }

  return (
    <div style={styles}>
        <h1 style={styles.h1}>Project</h1>
        <MonsterMain  />
    </div>
  );
}

export default App;
