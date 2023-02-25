import React from 'react'
import { useSelect } from 'downshift'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import styles from './Dropdown.module.css'

const Dropdown = () => {
  const ony: any = [
    { title: 'Get rempay', value: '80' },
    { title: 'Free rempay', value: '20' },
  ]
  function itemToString(item: any) {
    return item ? item.title : ''
  }

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: ony,
    itemToString,
  })
  return (
    <div {...getToggleButtonProps()}>
      <div className={`${!isOpen ? styles.dropbox : styles.dropboxopen}`}>
        <span className={styles.res}> Resources</span>
        <RiArrowDropDownLine size={30} />
      </div>
      <div {...getMenuProps()} className={styles.open}>
        <ul>
          {isOpen &&
            ony.map((item: any, index: number) => (
              <li
                key={`${item.value}${index}`}
                {...getItemProps({ item, index })}
              >
                {item.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
