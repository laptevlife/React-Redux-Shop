import React from 'react'

import { useDispatch } from 'react-redux'
import {setSortBy} from '../../redux/actions/filters'


const SortPopup = React.memo(function SortPopup({ items, filtersortBy  }) {

    const [popUpVisability, setVisability] = React.useState(false);
    // const [activeSortItem, setItem] = React.useState(0)
    // const activeSortItem = items.find(i => i.type === filtersortBy)
    const activeSortItem = items.findIndex(i => i.type === filtersortBy)
    // console.log(activeSortItem, "activeSortItem");
    // console.log(items.findIndex(i => i.type === filtersortBy));
    
    
    const chousenSortItem = items[activeSortItem].name
    const sortRef = React.useRef()
    const dispatch = useDispatch()

    const handleClick = (event) => {
        // console.log('clickkk');
        // const path = event.path || (event.composedPath && event.composedPath()) || composedPath(event.target);
        if (!event.path.includes(sortRef.current)) {
            // console.log('e', e.path);
            // console.log('sortRef.current', sortRef.current);
            
            setVisability(false)

        }
    }
    React.useEffect(() => {
        document.body.addEventListener('click', handleClick)
    }, [])

    const handleVisability = () => {
        setVisability(!popUpVisability)
    }
    const setActiveItem = (index) => {
        // setItem(index)
        setVisability(false)
        // console.log('index', index);
        
        dispatch(setSortBy(items[index].type))
    }


    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg

                    className={popUpVisability ? 'rotated' : ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={handleVisability}>{chousenSortItem}</span>
            </div>

            {popUpVisability && <div className="sort__popup">
                <ul>

                    {
                        items && items.map((item, index) => {
                            return (
                                <li key={index}
                                    onClick={() => setActiveItem(index)}
                                    className={activeSortItem === index ? "active" : null}>{item.name}</li>
                            )

                        })
                    }

                </ul>
            </div>}

        </div>
    )
})

export default SortPopup;
