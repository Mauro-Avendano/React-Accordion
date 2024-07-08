import React, {useState} from 'react';

export const CompoundAccordion = ({ children }) => {

  const initialState = React.Children.map(children, (child) => {
    if (child.props.isOpen) return true
    return false
  })

  const [openSections, setOpenSections] = useState(initialState)

  const handleClick = (idx) => {
    const newSections = [...openSections]
    newSections[idx] = !newSections[idx]
    setOpenSections(newSections)
  }

  const child = React.Children.map(children, (child, idx) => {
    return React.cloneElement(child, { idx, onClick: handleClick, isOpen: openSections[idx] });
  })

  return (
    <div>
      {child}
    </div>
  )
}

export const Section = ({title, description, isOpen, onClick, idx}) => {
  const handleClick = () => {
    onClick(idx)
  }

  return (
    <>
      <h3 onClick={handleClick}>{title}</h3>
      {isOpen && <p>{description}</p>}
    </>
  )
}

CompoundAccordion.Section = Section
