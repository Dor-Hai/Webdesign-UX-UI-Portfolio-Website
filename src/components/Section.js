import './Section.css';

export default function Section({ children, grey }) {

    return (
      <div className={grey ? 'section grey' : 'section'}>
        <div className="wrapper">
          {children}
        </div>
      </div>
    )
}
