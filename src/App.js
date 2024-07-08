import './App.css';
import Accordion from "./Accordion";
import {CompoundAccordion, Section} from "./CompoundAccordion";

function App() {

  const data= [
    { title: "title-1", description: "description-1", open: false },
    { title: "title-2", description: "description-2", open: false }
  ];

  return (
    <div className="App">
      <h1>My First Accordion</h1>
      <Accordion data={data}></Accordion>
      <h1>My Second Accordion</h1>
      <CompoundAccordion>
        <CompoundAccordion.Section title={"compound-tittle-1"} description={"compound-description-1"} isOpen={true}></CompoundAccordion.Section>
        <CompoundAccordion.Section title={"compound-tittle-2"} description={"compound-description-2"} isOpen={false}></CompoundAccordion.Section>
      </CompoundAccordion>
    </div>
  );
}

export default App;
