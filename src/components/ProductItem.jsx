function ProductItem({name,isSelected, onSelect,disabled}){
    function handleClick(){
            if(disabled) return;
            onSelect(name);
    }
    return(
        
        <div onClick={handleClick}
            style={{ 
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.5 : 1
            }}>
                {/* isSelected ? <p>{name}</p> : <></>
                 */}
                 {isSelected && "👉 "} {name}
        </div>
    )
}
export default ProductItem;