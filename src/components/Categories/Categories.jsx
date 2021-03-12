import React from 'react'



 const Categories = React.memo(function Categories({items, onClickItem}){

    const [activeItem, setActiveItem] = React.useState(null)

    const selectedItem = (index)=>{
        setActiveItem(index)
        onClickItem(index)
    }
    return(
        <div className="categories">
        <ul>
            <li  className={activeItem === null ? "active": null}
                 onClick={()=>selectedItem(null)}>Все</li>
         
            {
               items && items.map((item, index)=>{
                    return(
                        <li key={index}
                            onClick={()=>selectedItem(index)}
                            className={activeItem === index ? "active": null}>{item}</li>
                    )
                    
                })
            }
           
        </ul>
    </div>
    )

})

export default Categories