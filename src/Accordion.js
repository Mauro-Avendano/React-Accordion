import {useState} from "react";

const Accordion = ({ data }) => {

  const [accordionData, setAccordionData] = useState(data)

  const handleOnClick = (id) => {
    const newData = accordionData.map((el, idx) => {
      if (idx === id) {
        return {...el, open: !el.open}
      } else {
        return el
      }
    })
    setAccordionData(newData)
  }

    const titles = accordionData.map((el, idx) => {
    return (
      <div key={idx}>
        <h3 onClick={() => handleOnClick(idx) }>{el.title}</h3>
        {el.open && <p>{el.description}</p>}
      </div>
    )
  })

  return (
    <div>
      {titles}
    </div>
  )
}

export default Accordion
