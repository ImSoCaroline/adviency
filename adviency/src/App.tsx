import './styles.css';

export default function App() {
    const gifts = ["Oculus", "handbag", "glasses"];
    
    return (
      <main>
        <h1>Gifts:</h1>
        <ul>
          {gifts.map((gift) => (
            <li>{gift}</li>
          ))}
        </ul>
      </main>
    )
  }
  